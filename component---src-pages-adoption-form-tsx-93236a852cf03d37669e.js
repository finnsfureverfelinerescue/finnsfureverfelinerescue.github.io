"use strict";(self.webpackChunkfinns_furever_feline_rescue=self.webpackChunkfinns_furever_feline_rescue||[]).push([[757],{537:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Z},default:function(){return h}});var l=a(7294),n=a(8657),r=a(2713),o=a(1234),c=a(682),m=a(4051),i=a(1555),s=a(3330),u=a(5005),d=a(9861);var p=()=>{(0,l.useEffect)((()=>{!function(){const a=document.getElementsByName("$signature-date")[0];a.value=(new Date).toLocaleDateString("en-US"),t({...e,"$signature-date":a.value})}()}),[]);const{0:e,1:t}=(0,l.useState)({"$adopting-cats-names":"","$adopting-cats-for":"","$contact-name":"","$street-address":"",$city:"",$state:"",$zip:"",$phone:"","$email-address":"",$occupation:"","$residence-type":"","$moving-residence":"","$landlord-name":"","$landlord-phone-number":"","$over-twenty-one":"","$age-group-adults":"","$age-group-teens":"","$age-group-children":"","$age-group-toddlers":"","$age-group-babies":"","$children-cat-exposure":"",$allergies:"","$why-adopt":"","$hours-cat-alone":"","$indoor-cat":"","$emergency-funds":"","$list-companion-animals":"","$companion-animals-spayed-neutered":"","$companion-animals-vaccinated":"","$companion-animal-compatibility":"","$behavior-problem-steps":"","$new-cat-transition":"","$new-cat-separate-room":"","$cat-furniture":"","$not-able-to-care-cat":"","$other-considerations-yourself-family":"","$hear-about-us":"","$vet-name":"","$pratice-name":"","$vet-street-address":"","$vet-city":"","$vet-state":"","$vet-zip":"","$vet-phone":"","$personal-reference-name-1":"","$personal-reference-relationship-1":"","$personal-reference-contact-1":"","$personal-reference-name-2":"","$personal-reference-relationship-2":"","$personal-reference-contact-2":"","$certify-information":"","$signature-type-full-name":"","$signature-date":"",subject:"Adoption Form Submission",honeypot:"",replyTo:"@",accessKey:"ca4ed5ad-18ed-46c6-b247-a942683093c9"}),{0:a,1:n}=(0,l.useState)({type:"",message:""}),{0:r,1:o}=(0,l.useState)(!1);const p=a=>t({...e,[a.target.name]:a.target.value});return l.createElement(c.Z,{className:"adoption-form-container"},l.createElement(m.Z,null,l.createElement(i.Z,{sm:2}),l.createElement(i.Z,{sm:8},l.createElement("h2",null,"Adoption Application & Contract")),l.createElement(i.Z,{sm:2})),l.createElement(m.Z,null,l.createElement(i.Z,{sm:2}),l.createElement(i.Z,{sm:8},l.createElement(m.Z,{className:"success"===a.type?"":"hidden"},l.createElement(d.Z,{variant:"success",className:"alert-message"},a.message)),l.createElement(m.Z,{className:"error"===a.type?"":"hidden"},l.createElement(d.Z,{variant:"danger",className:"alert-message"},a.message))),l.createElement(i.Z,{sm:2})),l.createElement(m.Z,null,l.createElement(i.Z,{sm:2}),l.createElement(i.Z,{sm:8,className:""!==a.message?"hidden":""},l.createElement(s.Z,{noValidate:!0,validated:r,method:"post",onSubmit:async t=>{if(t.preventDefault(),!0===t.currentTarget.checkValidity())try{const t=await fetch("https://api.staticforms.xyz/submit",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),a=await t.json();a.success?n({type:"success",message:"Your form has been submitted successfully. Thank you for your interest in adopting from us! We will be getting back to you."}):n({type:"error",message:a.message})}catch(t){console.log("An error occurred",t),n({type:"error",message:"There was an error submitting your form. Please try again later or use the Adoption form in Word format."})}else(a=document.querySelectorAll("input.form-control:invalid, input.form-check-input:invalid")).length>0&&a[0].scrollIntoView({behavior:"smooth",block:"center"});var a;o(!0)}},l.createElement(c.Z,null,l.createElement(m.Z,null,l.createElement(i.Z,{sm:12,className:"special-reminder-color special-reminder-bottom-space"},"*** ALL fields are required ***")),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"adopting-cats-names"},l.createElement(s.Z.Label,null,"Name of cat (or cats) that you would like to adopt"),l.createElement(s.Z.Control,{type:"text",name:"$adopting-cats-names",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"adopting-cats-for"},l.createElement(s.Z.Label,null,"Who are you adopting this cat (or cats) for?"),l.createElement(s.Z.Control,{type:"text",name:"$adopting-cats-for",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Contact Information"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"contact-name"},l.createElement(s.Z.Label,null,"Name"),l.createElement(s.Z.Control,{type:"text",name:"$contact-name",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"street-address"},l.createElement(s.Z.Label,null,"Street Address"),l.createElement(s.Z.Control,{type:"text",name:"$street-address",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{className:"mb-3",controlId:"city"},l.createElement(s.Z.Label,null,"City"),l.createElement(s.Z.Control,{type:"text",name:"$city",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:3},l.createElement(s.Z.Group,{className:"mb-3",controlId:"state"},l.createElement(s.Z.Label,null,"State"),l.createElement(s.Z.Select,{name:"$state",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"AL"},"AL"),l.createElement("option",{value:"AK"},"AK"),l.createElement("option",{value:"AR"},"AR"),l.createElement("option",{value:"AZ"},"AZ"),l.createElement("option",{value:"CA"},"CA"),l.createElement("option",{value:"CO"},"CO"),l.createElement("option",{value:"CT"},"CT"),l.createElement("option",{value:"DC"},"DC"),l.createElement("option",{value:"DE"},"DE"),l.createElement("option",{value:"FL"},"FL"),l.createElement("option",{value:"GA"},"GA"),l.createElement("option",{value:"HI"},"HI"),l.createElement("option",{value:"IA"},"IA"),l.createElement("option",{value:"ID"},"ID"),l.createElement("option",{value:"IL"},"IL"),l.createElement("option",{value:"IN"},"IN"),l.createElement("option",{value:"KS"},"KS"),l.createElement("option",{value:"KY"},"KY"),l.createElement("option",{value:"LA"},"LA"),l.createElement("option",{value:"MA"},"MA"),l.createElement("option",{value:"MD"},"MD"),l.createElement("option",{value:"ME"},"ME"),l.createElement("option",{value:"MI"},"MI"),l.createElement("option",{value:"MN"},"MN"),l.createElement("option",{value:"MO"},"MO"),l.createElement("option",{value:"MS"},"MS"),l.createElement("option",{value:"MT"},"MT"),l.createElement("option",{value:"NC"},"NC"),l.createElement("option",{value:"NE"},"NE"),l.createElement("option",{value:"NH"},"NH"),l.createElement("option",{value:"NJ"},"NJ"),l.createElement("option",{value:"NM"},"NM"),l.createElement("option",{value:"NV"},"NV"),l.createElement("option",{value:"NY"},"NY"),l.createElement("option",{value:"ND"},"ND"),l.createElement("option",{value:"OH"},"OH"),l.createElement("option",{value:"OK"},"OK"),l.createElement("option",{value:"OR"},"OR"),l.createElement("option",{value:"PA"},"PA"),l.createElement("option",{value:"RI"},"RI"),l.createElement("option",{value:"SC"},"SC"),l.createElement("option",{value:"SD"},"SD"),l.createElement("option",{value:"TN"},"TN"),l.createElement("option",{value:"TX"},"TX"),l.createElement("option",{value:"UT"},"UT"),l.createElement("option",{value:"VT"},"VT"),l.createElement("option",{value:"VA"},"VA"),l.createElement("option",{value:"WA"},"WA"),l.createElement("option",{value:"WI"},"WI"),l.createElement("option",{value:"WV"},"WV"),l.createElement("option",{value:"WY"},"WY")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:3},l.createElement(s.Z.Group,{className:"mb-3",controlId:"zip"},l.createElement(s.Z.Label,null,"Zip"),l.createElement(s.Z.Control,{type:"text",name:"$zip",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"phone"},l.createElement(s.Z.Label,null,"Phone"),l.createElement(s.Z.Control,{type:"tel",name:"$phone",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"email-address"},l.createElement(s.Z.Label,null,"Email Address"),l.createElement(s.Z.Control,{type:"email",name:"$email-address",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required and needs to be a valid email address.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"occupation"},l.createElement(s.Z.Label,null,"Occupation"),l.createElement(s.Z.Control,{type:"text",name:"$occupation",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"General Information"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{className:"mb-3",controlId:"residence-type"},l.createElement(s.Z.Label,null,"Type of Residence"),l.createElement(s.Z.Select,{name:"$residence-type",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"House (own)"},"House (own)"),l.createElement("option",{value:"House (rent)"},"House (rent)"),l.createElement("option",{value:"Apartment"},"Apartment"),l.createElement("option",{value:"Condo"},"Condo"),l.createElement("option",{value:"Mobile Home"},"Mobile Home")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{className:"mb-3",controlId:"moving-residence"},l.createElement(s.Z.Label,null,"Are you planning to move within the next year?"),l.createElement(s.Z.Select,{name:"$moving-residence",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No"),l.createElement("option",{value:"Unsure"},"Unsure")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"landlord-name"},l.createElement(s.Z.Label,null,"Landlord's Name (if applicable)"),l.createElement(s.Z.Control,{type:"text",name:"$landlord-name",placeholder:"",onChange:p})))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"landlord-phone-number"},l.createElement(s.Z.Label,null,"Landlord's Phone Number (if applicable)"),l.createElement(s.Z.Control,{type:"tel",name:"$landlord-phone-number",placeholder:"",onChange:p})))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"About"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"over-twenty-one"},l.createElement(s.Z.Label,null,"Are you over 21 years old?"),l.createElement(s.Z.Select,{name:"$over-twenty-one",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"age-groups-in-home"},l.createElement(s.Z.Label,null,"Number of each in the home:"),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{as:m.Z,className:"mb-3",controlId:"age-group-adults"},l.createElement(s.Z.Label,{column:!0,sm:"7"},"Adults"),l.createElement(i.Z,{sm:5},l.createElement(s.Z.Control,{type:"text",name:"$age-group-adults",placeholder:"",defaultValue:"0",onChange:p,required:!0})),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{as:m.Z,className:"mb-3",controlId:"age-group-teens"},l.createElement(s.Z.Label,{column:!0,sm:"7"},"Teens (ages 12-18)"),l.createElement(i.Z,{sm:5},l.createElement(s.Z.Control,{type:"text",name:"$age-group-teens",placeholder:"",defaultValue:"0",onChange:p,required:!0})),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{as:m.Z,className:"mb-3",controlId:"age-group-children"},l.createElement(s.Z.Label,{column:!0,sm:"7"},"Children (ages 4-12)"),l.createElement(i.Z,{sm:5},l.createElement(s.Z.Control,{type:"text",name:"$age-group-children",placeholder:"",defaultValue:"0",onChange:p,required:!0})),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{as:m.Z,className:"mb-3",controlId:"age-group-toddlers"},l.createElement(s.Z.Label,{column:!0,sm:"7"},"Toddlers (ages 2 -4)"),l.createElement(i.Z,{sm:5},l.createElement(s.Z.Control,{type:"text",name:"$age-group-toddlers",placeholder:"",defaultValue:"0",onChange:p,required:!0})),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{as:m.Z,className:"mb-3",controlId:"age-group-babies"},l.createElement(s.Z.Label,{column:!0,sm:"7"},"Babies (under 2 years of age)"),l.createElement(i.Z,{sm:5},l.createElement(s.Z.Control,{type:"text",name:"$age-group-babies",placeholder:"",defaultValue:"0",onChange:p,required:!0})),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:6}))))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"children-cat-exposure"},l.createElement(s.Z.Label,null,"Have the children been exposed to cats/kittens?"),l.createElement(s.Z.Select,{name:"$children-cat-exposure",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"allergies"},l.createElement(s.Z.Label,null,"Does anyone have allergies?"),l.createElement(s.Z.Select,{name:"$allergies",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Reason for Adopting"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"why-adopt"},l.createElement(s.Z.Label,null,"Why are you looking to adopt?"),l.createElement(s.Z.Control,{as:"textarea",name:"$why-adopt",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"hours-cat-alone"},l.createElement(s.Z.Label,null,"How many hours will this cat be left alone on a daily basis?"),l.createElement(s.Z.Control,{type:"text",name:"$hours-cat-alone",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"indoor-cat"},l.createElement(s.Z.Label,null,"Will this cat be kept indoors only?"),l.createElement(s.Z.Select,{name:"$indoor-cat",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"emergency-funds"},l.createElement(s.Z.Label,null,"In an emergency, do you have funds set aside to be able to provide your cat with appropriate veterinary care?"),l.createElement(s.Z.Select,{name:"$emergency-funds",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Current Companion Animals"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"list-companion-animals"},l.createElement(s.Z.Label,null,"Please list ALL your current companion animals. If you own a dog, have they had positive interactions with cats?"),l.createElement(s.Z.Control,{as:"textarea",name:"$list-companion-animals",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"companion-animals-spayed-neutered"},l.createElement(s.Z.Label,null,"Are they spayed or neutered?"),l.createElement(s.Z.Select,{name:"$companion-animals-spayed-neutered",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"companion-animals-vaccinated"},l.createElement(s.Z.Label,null,"Are they all up to date on vaccinations?"),l.createElement(s.Z.Select,{name:"$companion-animals-vaccinated",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"companion-animal-compatibility"},l.createElement(s.Z.Label,null,"What will you do if your new cat does not get along with your present companion animals?"),l.createElement(s.Z.Control,{as:"textarea",name:"$companion-animal-compatibility",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"behavior-problem-steps"},l.createElement(s.Z.Label,null,"If a disciplinary or behavior problem arises, what steps will you take to work on it? (urinating in inappropriate places, clawing, biting, etc.)"),l.createElement(s.Z.Control,{as:"textarea",name:"$behavior-problem-steps",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"new-cat-transition"},l.createElement(s.Z.Label,null,"All animals need time to transition to their new home, are you willing to work with that animal until the transition is complete?"),l.createElement(s.Z.Select,{name:"$new-cat-transition",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"Yes"},"Yes"),l.createElement("option",{value:"No"},"No")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"new-cat-separate-room"},l.createElement(s.Z.Label,null,"Do you have a room where the new cat/kitten can be kept separate from other animals with a litter box and bowls until they can be introduced/acclimated to your home? Please explain."),l.createElement(s.Z.Control,{as:"textarea",name:"$new-cat-separate-room",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"cat-furniture"},l.createElement(s.Z.Label,null,"Do you have cat furniture such as cat trees, scratching post, etc.? Will you make time to play with your cat?"),l.createElement(s.Z.Control,{as:"textarea",name:"$cat-furniture",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"not-able-to-care-cat"},l.createElement(s.Z.Label,null,"If you are not able to care for your new cat, who will?"),l.createElement(s.Z.Control,{as:"textarea",name:"$not-able-to-care-cat",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"other-considerations-yourself-family"},l.createElement(s.Z.Label,null,"Is there anything you feel we should know when considering your application or anything you would like to tell us about yourself and/or your family?"),l.createElement(s.Z.Control,{as:"textarea",name:"$other-considerations-yourself-family",placeholder:"",style:{height:"250px"},onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"hear-about-us"},l.createElement(s.Z.Label,null,"How did you hear about us?"),l.createElement(s.Z.Control,{type:"text",name:"$hear-about-us",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Veterinary Information"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12,className:"special-reminder-color special-reminder-center"},"*** Please do not forget to call your vet and give permission to release your information to us. ***")),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-name"},l.createElement(s.Z.Label,null,"Name of Vet"),l.createElement(s.Z.Control,{type:"text",name:"$vet-name",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"pratice-name"},l.createElement(s.Z.Label,null,"Name of Practice"),l.createElement(s.Z.Control,{type:"text",name:"$pratice-name",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-street-address"},l.createElement(s.Z.Label,null,"Street Address"),l.createElement(s.Z.Control,{type:"text",name:"$vet-street-address",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:6},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-city"},l.createElement(s.Z.Label,null,"City"),l.createElement(s.Z.Control,{type:"text",name:"$vet-city",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:3},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-state"},l.createElement(s.Z.Label,null,"State"),l.createElement(s.Z.Select,{name:"$vet-state",placeholder:"",onChange:p,required:!0},l.createElement("option",{value:""}),l.createElement("option",{value:"AL"},"AL"),l.createElement("option",{value:"AK"},"AK"),l.createElement("option",{value:"AR"},"AR"),l.createElement("option",{value:"AZ"},"AZ"),l.createElement("option",{value:"CA"},"CA"),l.createElement("option",{value:"CO"},"CO"),l.createElement("option",{value:"CT"},"CT"),l.createElement("option",{value:"DC"},"DC"),l.createElement("option",{value:"DE"},"DE"),l.createElement("option",{value:"FL"},"FL"),l.createElement("option",{value:"GA"},"GA"),l.createElement("option",{value:"HI"},"HI"),l.createElement("option",{value:"IA"},"IA"),l.createElement("option",{value:"ID"},"ID"),l.createElement("option",{value:"IL"},"IL"),l.createElement("option",{value:"IN"},"IN"),l.createElement("option",{value:"KS"},"KS"),l.createElement("option",{value:"KY"},"KY"),l.createElement("option",{value:"LA"},"LA"),l.createElement("option",{value:"MA"},"MA"),l.createElement("option",{value:"MD"},"MD"),l.createElement("option",{value:"ME"},"ME"),l.createElement("option",{value:"MI"},"MI"),l.createElement("option",{value:"MN"},"MN"),l.createElement("option",{value:"MO"},"MO"),l.createElement("option",{value:"MS"},"MS"),l.createElement("option",{value:"MT"},"MT"),l.createElement("option",{value:"NC"},"NC"),l.createElement("option",{value:"NE"},"NE"),l.createElement("option",{value:"NH"},"NH"),l.createElement("option",{value:"NJ"},"NJ"),l.createElement("option",{value:"NM"},"NM"),l.createElement("option",{value:"NV"},"NV"),l.createElement("option",{value:"NY"},"NY"),l.createElement("option",{value:"ND"},"ND"),l.createElement("option",{value:"OH"},"OH"),l.createElement("option",{value:"OK"},"OK"),l.createElement("option",{value:"OR"},"OR"),l.createElement("option",{value:"PA"},"PA"),l.createElement("option",{value:"RI"},"RI"),l.createElement("option",{value:"SC"},"SC"),l.createElement("option",{value:"SD"},"SD"),l.createElement("option",{value:"TN"},"TN"),l.createElement("option",{value:"TX"},"TX"),l.createElement("option",{value:"UT"},"UT"),l.createElement("option",{value:"VT"},"VT"),l.createElement("option",{value:"VA"},"VA"),l.createElement("option",{value:"WA"},"WA"),l.createElement("option",{value:"WI"},"WI"),l.createElement("option",{value:"WV"},"WV"),l.createElement("option",{value:"WY"},"WY")),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required."))),l.createElement(i.Z,{sm:3},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-zip"},l.createElement(s.Z.Label,null,"Zip"),l.createElement(s.Z.Control,{type:"text",name:"$vet-zip",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"vet-phone"},l.createElement(s.Z.Label,null,"Phone"),l.createElement(s.Z.Control,{type:"tel",name:"$vet-phone",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Personal Reference 1 (individual who is familiar with how you care for your current companion animals)"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-name-1"},l.createElement(s.Z.Label,null,"Name"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-name-1",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-relationship-1"},l.createElement(s.Z.Label,null,"Relationship"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-relationship-1",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-contact-1"},l.createElement(s.Z.Label,null,"Contact Info (cell or email)"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-contact-1",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Personal Reference 2 (individual who is familiar with how you care for your current companion animals)"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-name-2"},l.createElement(s.Z.Label,null,"Name"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-name-2",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-relationship-2"},l.createElement(s.Z.Label,null,"Relationship"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-relationship-2",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"personal-reference-contact-2"},l.createElement(s.Z.Label,null,"Contact Info (cell or email)"),l.createElement(s.Z.Control,{type:"text",name:"$personal-reference-contact-2",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Your Agreement"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12,className:"your-agreement"},l.createElement(s.Z.Group,null,l.createElement(s.Z.Check,{type:"checkbox",name:"$certify-information",label:"I certify that the information I have provided is true, and I realize that any misrepresentation of facts may result in my losing the privilege of adopting a companion animal.  I understand that my request to adopt may be denied for any circumstance or situation that could be deemed not in the best interest of the companion animal.  I authorize investigation of all statements in this application.  I also authorize my veterinarian to release any information that would be helpful in determining a suitable adoption.",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"Agreement must be acknowledged.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement("h3",null,"Your Agreement Signature"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"signature-type-full-name"},l.createElement(s.Z.Label,null,"Signature (type your full name)"),l.createElement(s.Z.Control,{type:"text",name:"$signature-type-full-name",placeholder:"",onChange:p,required:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Group,{className:"mb-3",controlId:"signature-date"},l.createElement(s.Z.Label,null,"Date"),l.createElement(s.Z.Control,{type:"text",name:"$signature-date",placeholder:"",onChange:p,required:!0,readOnly:!0}),l.createElement(s.Z.Control.Feedback,{type:"invalid"},"This field is required.")))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12,className:"special-reminder-color"},"*** Cat adoption fees include spay/neuter, age appropriate vaccines, flea/tick treatment, de-worming and testing for FIV/FeLV. ***")),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12,className:"special-reminder-color special-reminder-bottom-space"},"*** Applications are not based on first come first served. Approved adoptions are based on the best home for that particular companion animal and/or the best companion animal for your household/lifestyle. ***")),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(u.Z,{variant:"secondary",type:"submit"},"Submit"))),l.createElement(m.Z,null,l.createElement(i.Z,{sm:12},l.createElement(s.Z.Control,{type:"text",name:"honeypot",onChange:p,style:{display:"none"}})))))),l.createElement(i.Z,{sm:2})))},E=a(1494);const Z=()=>l.createElement("title",null,"Adoption Form - Finn's Furever Feline Rescue");var h=()=>l.createElement("div",null,l.createElement(n.Z,null),l.createElement(r.Z,{menuSelected:"adopt-menu"}),l.createElement("main",null,l.createElement(E.Z,{slideLabel:"",slideDescription:"",heroImageClass:"contact-us-hero"}),l.createElement(p,null)),l.createElement(o.Z,null))}}]);
//# sourceMappingURL=component---src-pages-adoption-form-tsx-93236a852cf03d37669e.js.map