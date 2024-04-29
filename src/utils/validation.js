import * as yup from "yup"

const passwordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export  const loginShema=yup.object().shape({
    email:yup.string().email("Plearsz enter a valid email").required("Required"),
    password:yup.string().min(5).matches(passwordRules,{message:'Please create a stronger password'}).required('Required')
});
export  const registerShema=yup.object().shape({
    userName:yup.string("please  entrer a string characaire").required('Required'),
    email:yup.string().email("Plearsz enter a valid email").required("Required"),
    password:yup.string().min(5).matches(passwordRules,{message:'Please create a stronger password'}).required('Required')
});

