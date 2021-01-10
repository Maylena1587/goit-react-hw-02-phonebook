(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__5D3h-",input:"Filter_input__1woPQ"}},13:function(t,e,n){t.exports={container:"Container_container__1ThnI"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1Y09f",label:"ContactForm_label__gN4dl",input:"ContactForm_input__2LaOT",btn:"ContactForm_btn__a5huO"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(12),i=n.n(o),s=n(15),l=n(6),u=n(7),b=n(9),m=n(8),h=n(3),d=n.n(h),j=n(13),p=n.n(j);var f=function(t){var e=t.children;return Object(a.jsx)("div",{className:p.a.container,children:e})},v=n(14),C=n(2),O=n.n(C),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:O.a.label,children:["Name",Object(a.jsx)("input",{className:O.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Ivan Ivanov"})]}),Object(a.jsxs)("label",{className:O.a.label,children:["Number",Object(a.jsx)("input",{className:O.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"111-11-11"})]}),Object(a.jsx)("button",{className:O.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=n(11),g=n.n(x);var y=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},N=n(4),S=n.n(N);var w=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:S.a.item,children:[Object(a.jsxs)("p",{className:S.a.info,children:[c,": ",r]}),Object(a.jsx)("button",{className:S.a.btn,type:"button",onClick:function(){return n(e)}})]},e)}))})},F=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:d.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:d.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:d.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:d.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}})):alert("Enter the correct number phone!")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(_,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(a.jsx)(y,{value:e,onChange:this.changeFilter}),n.length>0?Object(a.jsx)(w,{contacts:c,onDeleteContact:this.deleteContact}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(c.Component);n(29),n(30);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__21NcN",item:"ContactList_item__1IJ6U",btn:"ContactList_btn__2nVXu"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c4c7ba7f.chunk.js.map