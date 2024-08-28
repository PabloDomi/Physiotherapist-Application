import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{u,F}from"./index.esm-Bebovizm.js";import{L as d}from"./LoginFormField-BwS1s3rO.js";import{t as g}from"./zod-Cul73vRk.js";import{l as h}from"./schemas-rfPO-qWq.js";import"./index-Cu9bd8lq.js";const S={title:"Components/LoginFormField",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},placeholder:{control:"text"},inputType:{control:"select",options:["text","password","email"]}}},c=p=>{const s=u({resolver:g(h)});return e.jsx(F,{...s,children:e.jsx("form",{children:e.jsx(d,{...p,formControl:s.control})})})},r=c.bind({});r.args={name:"email",placeholder:"Enter your email",inputType:"email"};const o=c.bind({});o.args={name:"password",placeholder:"Enter your password",inputType:"password"};var t,n,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  });
  return <FormProvider {...methods}>\r
      <form>\r
        <LoginFormField {...args} formControl={methods.control} />\r
      </form>\r
    </FormProvider>;
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  });
  return <FormProvider {...methods}>\r
      <form>\r
        <LoginFormField {...args} formControl={methods.control} />\r
      </form>\r
    </FormProvider>;
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const w=["EmailInput","PasswordInput"];export{r as EmailInput,o as PasswordInput,w as __namedExportsOrder,S as default};
