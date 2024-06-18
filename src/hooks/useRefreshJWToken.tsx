import { useEffect, useRef } from 'react';
import GetDataService from '../services/GetDataService';
import AuthorizationService from '../services/AuthorizationService';
import { UserAdmin } from '../utils/types';

const useRefreshJWToken = (user: UserAdmin | null) => {
    const isInitialRender = useRef(true);
    const inactivityLimit = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    const lastActivityTimeout = useRef<NodeJS.Timeout | null>(null);
    const lastSavedActivity = useRef<number>(Date.now());

    useEffect(() => {
        const updateToken = async () => {
            if (!user) return;
            const data = await GetDataService.getAccessToken(user.email);
            if (data) {
                AuthorizationService.setToken(data.access_token);
                localStorage.setItem('lastActivity', Date.now().toString());
            }
        };

        const checkInactivity = () => {
            const lastActivity = parseInt(localStorage.getItem('lastActivity') || '0', 10);
            if (Date.now() - lastActivity > inactivityLimit) {
                AuthorizationService.removeToken();
                localStorage.removeItem('user'); // Assuming 'userSession' is where the user is stored
                window.location.reload(); // Optionally, force a reload to clear any user-specific data in memory
            }
        };

        if (user !== undefined && user !== null) {
            if (isInitialRender.current) {
                updateToken();
                isInitialRender.current = false;
            }

            const interval = setInterval(() => {
                updateToken();
            }, 1000 * 60 * 3); // Update token every 3 minutes

            checkInactivity();

            return () => clearInterval(interval);
        }
    }, [user, inactivityLimit]);

    useEffect(() => {
        const updateLastActivity = () => {
            if (lastActivityTimeout.current) {
                clearTimeout(lastActivityTimeout.current);
            }

            lastActivityTimeout.current = setTimeout(() => {
                const now = Date.now();
                if (now - lastSavedActivity.current >= 1000 * 60) { // Check if at least 1 minute has passed
                    localStorage.setItem('lastActivity', now.toString());
                    lastSavedActivity.current = now;
                }
            }, 1000 * 60); // Wait for 1 minute before updating
        };

        window.addEventListener('mousemove', updateLastActivity);
        window.addEventListener('keydown', updateLastActivity);

        return () => {
            window.removeEventListener('mousemove', updateLastActivity);
            window.removeEventListener('keydown', updateLastActivity);
            if (lastActivityTimeout.current) {
                clearTimeout(lastActivityTimeout.current);
            }
        };
    }, []);
};

export default useRefreshJWToken;
