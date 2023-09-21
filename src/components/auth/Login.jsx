
import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { loginContext } from "../../App";

const Login = () => {
    const {setLogin}=useContext(loginContext)
    const [form, setForm] = useState({
        name:'',
        surname:'',
        email: "",
        password:'',
        date:'',
        gender:'',
   
    })
    const [open, setOpen] = useState(false)


    const HandelLogin = async (e) => {
        e.preventDefault()
        const {email,password}=JSON.parse(localStorage.getItem('user'))
        if(email===form.email&& password===form.password){
            setLogin(true)
            toast.success('Login successful')
        }else{
            toast.error('Wrong credential')
        }
        console.log(form.email)
    }

    const HandelReg = async (e) => {
        e.preventDefault()
        // localStorage.setItem('user', JSON.stringify(form.) )
     const user={...form}
     console.log(form.password)
     console.log(form.email)

       localStorage.setItem('user',JSON.stringify(user)) 
    }

    // const {name}=JSON.parse(localStorage.getItem('user'))

    // localStorage.removeItem()
    return (
        <div className='bg-[#f1e9e9] min-h-[100vh] w-full relative '>

            <div className=' h-full w-[80%] mx-auto  400px:p-10 '>
                <div className='h-full flex flex-col  800px:flex-row 800px:justify-between'>
                    <div className='mt-5 800px:mt-20' >
                        <h2 className='text-blue-600 font-semibold text-[40px] 800px:text-[10vh]'>facebook</h2>
                        <h3 >Facebook helps ou connect and share <br />with the people in your life</h3>
                    </div>

                    <div className='h-[51vh] w-[98%] 800px:w-[50%] bg-white rounded-sm mt-16'>
                        <div className='h-full w-full p-1 800px:p-3'>
                            <form onSubmit={HandelLogin} >
                                <div className='mt-2'>
                                    <input type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder='Email address or phone number'
                                        className='appearance-none border border-[#ccc9c9] outline-none rounded-md py-2 px-2 w-full focus:border-blue-500 text-[#585050]' />
                                </div>

                                <div className='mt-2'>
                                    <input type="password"
                                        value={form.password}
                                        required
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        placeholder='Password'
                                        className='appearance-none border border-[#ccc9c9] outline-none rounded-md py-2 px-2 w-full focus:border-blue-500 text-[#585050]' />
                                </div>

                                <div className='mt-2'>
                                    <input type="submit"
                                        value="Log in"
                                        className='appearance-none border border-[#ccc9c9] outline-none rounded-md py-2 px-2 w-full bg-blue-600 font-semibold text-white cursor-pointer' />
                                </div>

                                <div className='mt-2'>
                                    <p className='text-blue-600 text-[12px] text-center border-b-[1px] 
                                  border-[#dbcece] pb-3'>
                                        <Link to={'/'}>Forgotten password?</Link></p>
                                </div>

                                <div className='mt-4 w-full text-center '>
                                    <input type="submit"
                                        onClick={() => setOpen(true)}
                                        value="Create new account"
                                        className='appearance-none border border-[#ccc9c9] outline-none rounded-md py-2 px-2 w-[90%] 800px:w-[70%] bg-[green] font-semibold text-white cursor-pointer' />


                                </div>
                            </form>

                        </div>
                        <div className='text-center mt-3 '>
                            <h5 className='text-[10px] font-semibold'><span className='text-[12px] font-semibold'>Create a Page </span> for a celebrity brand or business</h5>
                        </div>
                    </div>
                </div>
            </div>

            {
                open && (
                    <div className='h-[100vh] w-[100%] bg-[#00000060]  absolute top-0  '>
                        <div className='min-h-[70vh] w-[95%] 800px:w-[40%] bg-white mx-auto mt-20 rounded-sm '>
                            <div className='flex justify-between p-2 800px:p-3 cursor-pointer border-[2px] border-b w-full h-[12vh]'>
                                <div className='leading-[23px]'>
                                    <h1 className='font-semibold text-[26px]'>Sign Up</h1>
                                    <p className='text-[10px]'>its quick and easy</p>
                                </div>

                                <RxCross1 size={20} onClick={() => setOpen(false)} /></div>

                            <div className='p-2 800px:p-4'>
                                <form onSubmit={HandelReg} className='mt-2' action="">
                                    <div>
                                        <div className='flex justify-between'>
                                            <input type="text"
                                                placeholder='First name'
                                                value={form.name}
                                                onChange={(e)=>setForm({...form,name:e.target.value})}
                                                className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 w-full focus:border-blue-500 text-[#585050] 800px:w-[45%] mr-1' />

                                            <input type="text"
                                             placeholder='Surname'
                                             value={form.surname}
                                             onChange={(e)=>setForm({...form, surname:e.target.value})}
                                                className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 w-full ml-1 focus:border-blue-500 text-[#585050] 800px:w-[45%] text-[15px]' />
                                        </div>
                                    </div>

                                    <div className='mt-3'>

                                        <input type="text" 
                                          value={form.email}
                                          onChange={(e)=>setForm({...form, email:e.target.value})}
                                        placeholder='Mobile number of email address'
                                            className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 w-full focus:border-blue-500 text-[#585050] 800px:w-full text-[15px]' />
                                    </div>

                                    <div className='mt-3'>

                                        <input type="text"
                                         placeholder='New password'
                                         value={form.password}
                                         onChange={(e)=>setForm({...form, password:e.target.value})}
                                            className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 w-full focus:border-blue-500 text-[#585050] 800px:w-full text-[15px]' />
                                    </div>



                                    <div className=' mt-2 flex flex-col 800px:flex-row 800px:justify-between'>
                                        <div className="mr-1 w-full  800px:w-[50%] ">
                                            <label htmlFor="" className='text-[12px] block'>Date of birth</label>
                                            <input type="date"
                                                 value={form.date}
                                                 onChange={(e)=>setForm({...form, date:e.target.value})}

                                                className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 focus:border-blue-500 text-[#585050] w-full mr-1' />
                                        </div>

                                        <div className=' 800px:ml-1 w-full mt-2 800px:mt-0 800px:w-[50%]'>
                                            <label htmlFor="" className='text-[12px] block'>Gender</label>

                                            <select
                                                className='appearance-none border border-[#ccc9c9] outline-none rounded-sm h-8 p-1 focus:border-blue-500 text-[#585050] w-full '
                                                name="gender"
                                                 id=""
                                                 value={form.gender}
                                                 onChange={(e)=>setForm({...form, gender:e.target.value})}>
                                                <option className='text-[13px] 
                                                        bg-[#14151a] text-white' value="">choose</option>
                                                <option className='text-[13px] 
                                                        bg-[#14151a] text-white'  value="Male">Male</option>
                                                <option className='text-[13px] 
                                                        bg-[#14151a] text-white'  value="Female">Female</option>
                                                <option className='text-[13px] 
                                                        bg-[#14151a] text-white'  value="Custom">Custom</option>

                                            </select>

                                        </div>
                                    </div>

                                    <div className='p-2 mt-1'>
                                        <p className="text-[9px]">People who use our service may have uploaded your contact information to Facebook. <Link className='
                                                            text-[green]' to={'/more'}>Learn more.</Link> </p>
                                        <p className="text-[9px] mt-1">People who use our service By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time..</p>

                                    </div>

                                    <div className='mt-4 w-full text-center '>
                                        <input type="submit"
                                            onClick={() =>{ 
                                            toast.success('successfully submitted')
                                            setTimeout(()=>{
                                                setOpen(false)
                                            }),1000}}
                                            value="Sign Up"
                                            className='appearance-none border border-[#ccc9c9] outline-none rounded-md py-2 px-2 w-[90%] 800px:w-[40%] bg-[green] font-semibold text-white cursor-pointer' />


                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Login;