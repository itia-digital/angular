(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Msem:function(e,t,n){"use strict";n.r(t),n.d(t,"FormsModule",(function(){return F}));var o=n("2kYt"),r=n("OTup"),c=n("sEIs"),i=n("EM62"),a=n("qFEQ");let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Rb({type:e,selectors:[["idg-docs-forms"]],decls:2,vars:0,consts:[["fxLayout","row wrap"]],template:function(e,t){1&e&&(i.dc(0,"div",0),i.Yb(1,"router-outlet"),i.cc())},directives:[a.c,c.f],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%]{padding:4px}[_nghost-%COMP%]   .tab-content[_ngcontent-%COMP%]{padding:8px}"]}),e})();var s=n("C05f"),m=n("nIj0"),u=n("Meci"),d=n("KZIX"),p=n("bFHC"),f=n("29Wa"),y=n("PBFl");function b(e,t){1&e&&i.Zb(0)}function h(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function v(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function g(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function x(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function w(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function C(e,t){1&e&&(i.dc(0,"mat-error"),i.Kc(1,"Required"),i.cc())}function T(e,t){if(1&e){const e=i.ec();i.dc(0,"form",10),i.dc(1,"idg-mat-input",11),i.dc(2,"mat-icon",12),i.Kc(3,"sentiment_very_satisfied"),i.cc(),i.cc(),i.dc(4,"idg-mat-input-url",13),i.Ic(5,h,2,0,"mat-error",14),i.dc(6,"a",15),i.dc(7,"mat-icon"),i.Kc(8,"edit"),i.cc(),i.cc(),i.cc(),i.dc(9,"idg-mat-input-email",16),i.dc(10,"mat-hint"),i.Kc(11,"Un email estudiantil "),i.cc(),i.Ic(12,v,2,0,"mat-error",14),i.dc(13,"button",17),i.lc("click",(function(){i.Cc(e);const t=i.pc();return t.hide=!t.hide})),i.dc(14,"mat-icon"),i.Kc(15),i.cc(),i.cc(),i.cc(),i.dc(16,"idg-mat-select",18),i.Ic(17,g,2,0,"mat-error",14),i.cc(),i.dc(18,"idg-mat-autocomplete",19),i.dc(19,"mat-icon",20),i.Kc(20,"flag"),i.cc(),i.Ic(21,x,2,0,"mat-error",14),i.cc(),i.dc(22,"idg-mat-autocompletes",21),i.dc(23,"mat-icon",20),i.Kc(24,"emoji_flags"),i.cc(),i.Ic(25,w,2,0,"mat-error",14),i.cc(),i.dc(26,"idg-mat-textarea",22),i.dc(27,"mat-icon",12),i.Kc(28,"face"),i.cc(),i.Ic(29,C,2,0,"mat-error",14),i.cc(),i.dc(30,"idg-mat-date-picker",23),i.dc(31,"mat-icon",12),i.Kc(32,"cake"),i.cc(),i.cc(),i.dc(33,"idg-mat-file-picker",24),i.dc(34,"span"),i.Kc(35,"hola"),i.cc(),i.cc(),i.cc()}if(2&e){const e=i.pc();i.vc("formGroup",e.form),i.Lb(5),i.vc("ngIf",null==e.form.controls.website||null==e.form.controls.website.errors?null:e.form.controls.website.errors.required),i.Lb(7),i.vc("ngIf",null==e.form.controls.email||null==e.form.controls.email.errors?null:e.form.controls.email.errors.required),i.Lb(1),i.Mb("aria-label","Hide password")("aria-pressed",e.hide),i.Lb(2),i.Lc(e.hide?"visibility_off":"visibility"),i.Lb(2),i.vc("ngIf",null==e.form.controls.gender||null==e.form.controls.gender.errors?null:e.form.controls.gender.errors.required),i.Lb(4),i.vc("ngIf",null==e.form.controls.country||null==e.form.controls.country.errors?null:e.form.controls.country.errors.required),i.Lb(4),i.vc("ngIf",null==e.form.controls.country||null==e.form.controls.country.errors?null:e.form.controls.country.errors.required),i.Lb(4),i.vc("ngIf",null==e.form.controls.about||null==e.form.controls.about.errors?null:e.form.controls.about.errors.required)}}const q=[{path:"",component:l,children:[{path:"descriptive",component:(()=>{class e{constructor(){this.html='\n    <form [formGroup]="form" fxLayout="row wrap" fxLayoutAlign="space-between start" fxLayoutGap="7px">\n        <idg-mat-input fxFlex formControlName="username">\n            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n        </idg-mat-input>\n        <idg-mat-input-email fxFlex formControlName="email"></idg-mat-input-email>\n        <idg-mat-select formControlName="gender"></idg-mat-select>\n        <idg-mat-autocomplete formControlName="country"></idg-mat-autocomplete>\n    </form>\n  ',this.ts="\n  form = new IDGFormGroup({\n        username: {\n            placeholder: 'Type your username',\n            hint: 'Input component sample',\n            elementType: 'input',\n            visible: true\n        },\n        email: {\n            placeholder: 'Type your email address',\n            displayFn: () => 'Eg. manolo@itia.mx',\n            validators: [Validators.required],\n            hint: 'Email component sample',\n            elementType: 'email-input',\n            visible: true\n        },\n        website: {\n            placeholder: 'Type your work or personal website',\n            validators: [Validators.required],\n            hint: 'Url component sample',\n            elementType: 'url-input',\n            visible: true\n        },\n        gender: {\n            placeholder: 'Select your gender',\n            validators: [Validators.required],\n            hint: 'Select component sample',\n            elementType: 'select',\n            visible: true,\n            options: [\n                { text: 'Male', value: 1 },\n                { text: 'Female', value: 2 }\n            ]\n        },\n        country: {\n            hint: 'Autocomplete component sample',\n            placeholder: 'Select your country',\n            displayFn: () => 'Eg. type Mex',\n            validators: [Validators.required],\n            elementType: 'autocomplete',\n            visible: true,\n            asyncOptions: this.countries$.asObservable(),\n            queryChange: (q: string) =>\n                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))\n        },\n        countries: {\n            hint: 'Autocompletes component sample',\n            placeholder: 'Select many countries',\n            displayFn: () => 'Eg. type USA, ',\n            validators: [Validators.required],\n            elementType: 'autocompletes',\n            forceSelection: true,\n            visible: true,\n            value: [],\n            asyncOptions: this.countries$.asObservable(),\n            queryChange: (q: string) =>\n                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))\n        },\n        about: {\n            placeholder: 'Tell us about you',\n            validators: [Validators.required],\n            hint: 'Textarea component sample',\n            elementType: 'textarea',\n            visible: true\n        },\n        birthday: {\n            placeholder: 'Type your happy birthday',\n            hint: 'Datepicker component sample',\n            elementType: 'date-input',\n            visible: true\n        },\n        files: {\n            hint: 'File upload component sample',\n            elementType: 'file-input',\n            fileType: 'documents',\n            filesCount: 2,\n            visible: true\n        }\n    });\n    ",this.countries=[{text:"M\xe9xico",value:"MEX"},{text:"USA",value:"USA"},{text:"C\xe1nada",value:"CAN"}],this.countries$=new s.a(this.countries),this.form=new r.i({username:{placeholder:"Type your username",hint:"Input component sample",elementType:"input",visible:!0},email:{placeholder:"Type your email address",displayFn:()=>"Eg. manolo@itia.mx",validators:[m.n.required],hint:"Email component sample",elementType:"email-input",visible:!0},website:{placeholder:"Type your work or personal website",validators:[m.n.required],hint:"Url component sample",elementType:"url-input",visible:!0},gender:{placeholder:"Select your gender",validators:[m.n.required],hint:"Select component sample",elementType:"select",visible:!0,options:[{text:"Male",value:1},{text:"Female",value:2}]},country:{hint:"Autocomplete component sample",placeholder:"Select your country",displayFn:()=>"Eg. type Mex",validators:[m.n.required],elementType:"autocomplete",visible:!0,asyncOptions:this.countries$.asObservable(),queryChange:e=>this.countries$.next(this.countries.filter(t=>t.text.toLowerCase().match(e.toLowerCase())))},countries:{hint:"Autocompletes component sample",placeholder:"Select many countries",displayFn:()=>"Eg. type USA, ",validators:[m.n.required],elementType:"autocompletes",forceSelection:!0,visible:!0,value:[],asyncOptions:this.countries$.asObservable(),queryChange:e=>this.countries$.next(this.countries.filter(t=>t.text.toLowerCase().match(e.toLowerCase())))},about:{placeholder:"Tell us about you",validators:[m.n.required],hint:"Textarea component sample",elementType:"textarea",visible:!0},birthday:{placeholder:"Type your happy birthday",hint:"Datepicker component sample",elementType:"date-input",visible:!0},files:{hint:"File upload component sample",elementType:"file-input",fileType:"documents",filesCount:2,visible:!0}}),this.hide=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Rb({type:e,selectors:[["idg-docs-descriptive-form"]],decls:21,vars:6,consts:[["label","Form"],["fxLayout","row",1,"tab-content"],["fxFlex",""],[4,"ngTemplateOutlet"],["title","Result",3,"code"],["label","HTML"],[1,"tab-content"],["title","Code",3,"code"],["label","TS"],["descriptiveForm",""],["fxLayout","row wrap","fxLayoutAlign","space-between start","fxLayoutGap","7px",3,"formGroup"],["fxFlex","","formControlName","username"],["matPrefix",""],["fxFlex","","formControlName","website"],[4,"ngIf"],["mat-icon-button",""],["fxFlex","","formControlName","email"],["mat-icon-button","",3,"click"],["formControlName","gender"],["formControlName","country"],["matSuffix",""],["formControlName","countries"],["formControlName","about"],["formControlName","birthday"],["formControlName","files"]],template:function(e,t){if(1&e&&(i.dc(0,"mat-card"),i.dc(1,"mat-card-header"),i.dc(2,"mat-card-title"),i.Kc(3," HTML descriptive "),i.cc(),i.cc(),i.dc(4,"mat-card-content"),i.dc(5,"mat-tab-group"),i.dc(6,"mat-tab",0),i.dc(7,"div",1),i.dc(8,"div",2),i.Ic(9,b,1,0,"ng-container",3),i.cc(),i.dc(10,"div",2),i.Yb(11,"idg-mat-terminal",4),i.qc(12,"json"),i.cc(),i.cc(),i.cc(),i.dc(13,"mat-tab",5),i.dc(14,"div",6),i.Yb(15,"idg-mat-terminal",7),i.cc(),i.cc(),i.dc(16,"mat-tab",8),i.dc(17,"div",6),i.Yb(18,"idg-mat-terminal",7),i.cc(),i.cc(),i.cc(),i.cc(),i.cc(),i.Ic(19,T,36,10,"ng-template",null,9,i.Jc)),2&e){const e=i.Ac(20);i.Lb(9),i.vc("ngTemplateOutlet",e),i.Lb(2),i.vc("code",i.rc(12,4,t.form.value)),i.Lb(4),i.vc("code",t.html),i.Lb(3),i.vc("code",t.ts)}},directives:[u.a,u.c,u.e,u.b,d.b,d.a,a.c,a.a,o.r,r.s,m.o,m.k,a.b,a.d,m.f,r.k,m.j,m.d,p.a,f.h,r.o,o.m,y.a,r.l,f.f,y.b,r.q,r.a,f.i,r.c,r.u,r.e,r.g,f.b],pipes:[o.g],styles:[""]}),e})()}]},{path:"**",redirectTo:"/material/forms/descriptive"}];let L=(()=>{class e{}return e.\u0275mod=i.Vb({type:e}),e.\u0275inj=i.Ub({factory:function(t){return new(t||e)},imports:[[c.e.forChild(q)],c.e]}),e})(),F=(()=>{class e{}return e.\u0275mod=i.Vb({type:e}),e.\u0275inj=i.Ub({factory:function(t){return new(t||e)},imports:[[o.c,L,r.j,r.n,r.t,r.v,r.m,r.r,r.b,r.p,r.d,r.f,r.h]]}),e})()}}]);