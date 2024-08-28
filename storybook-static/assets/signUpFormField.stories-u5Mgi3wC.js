import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{u as h,F as f}from"./index.esm-Bebovizm.js";import{S as x}from"./SignUpFormField-C0w1utYX.js";/* empty css                     */import"./index-Cu9bd8lq.js";const S=s=>{const n=h();return r.jsx(f,{...n,children:r.jsx("form",{children:r.jsx(s,{})})})},E={title:"Components/SignUpFormField",component:x,decorators:[S],tags:["autodocs"],argTypes:{name:{control:"text"},placeholder:{control:"text"},inputType:{control:"text"},formControl:{control:"object"}}},m=s=>{const n=h();return r.jsx(f,{...n,children:r.jsx("form",{children:r.jsx(x,{...s,formControl:n.control})})})},o=m.bind({});o.args={name:"name",placeholder:"Enter your name",inputType:"text"};const e=m.bind({});e.args={name:"email",placeholder:"Enter your email",inputType:"text"};const t=m.bind({});t.args={name:"password",placeholder:"Enter your password",inputType:"password"};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const methods = useForm<SignUpFormSchema>();
  return <FormProvider {...methods}>\r
            <form>\r
                <SignUpFormField {...args} formControl={methods.control} />\r
            </form>\r
        </FormProvider>;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const methods = useForm<SignUpFormSchema>();
  return <FormProvider {...methods}>\r
            <form>\r
                <SignUpFormField {...args} formControl={methods.control} />\r
            </form>\r
        </FormProvider>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,F,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const methods = useForm<SignUpFormSchema>();
  return <FormProvider {...methods}>\r
            <form>\r
                <SignUpFormField {...args} formControl={methods.control} />\r
            </form>\r
        </FormProvider>;
}`,...(g=(F=t.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const C=["NameInput","EmailInput","PasswordInput"];export{e as EmailInput,o as NameInput,t as PasswordInput,C as __namedExportsOrder,E as default};
