import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { LoginSchema } from '@/schema/AuthSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
const DEFAULT_VALUES = {
    email: "",
    password: "",
}

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: DEFAULT_VALUES,
        resolver: zodResolver(LoginSchema),
    })

    const handleSubmitForm = (data) => {
        const ValidEmail = "admin@gmail.com"
        const ValidPassword = "admin123"

        if (data.email === ValidEmail && data.password === ValidPassword) {
            toast.success("Login successful!")
            navigate("/admin/dashboard")
            reset()
        } else {
            toast.error("Invalid email or password")
            return
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>

            {/* Left Side - Dark Panel */}
            <div className='hidden lg:flex bg-[#14181f] flex-col justify-center p-14'>

                {/* Logo */}
                <div className='flex items-center gap-3 mb-12'>
                    <div className='w-9 h-9 bg-[#f59f0a] rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-base'>L</span>
                    </div>
                    <span className='text-white font-semibold text-lg'>LuxThread</span>
                </div>

                {/* Headline */}
                <div className='mb-6'>
                    <h1 className='text-white font-bold text-4xl leading-tight'>
                        Manage your brand
                    </h1>
                    <span className='text-[#f59f0a] font-bold text-4xl'>
                        with precision.
                    </span>
                </div>

                {/* Description */}
                <p className='text-[#8c8d91] text-lg leading-relaxed mb-12'>
                    Unified inventory, branches, and analytics — all in one place. Built for modern fashion brands.
                </p>

                {/* Stats */}
                <div className='flex gap-12'>
                    <div>
                        <h2 className='text-[#f59f0a] font-bold text-3xl'>500+</h2>
                        <p className='text-[#8c8d91] text-base mt-1'>Brands</p>
                    </div>
                    <div>
                        <h2 className='text-[#f59f0a] font-bold text-3xl'>12K</h2>
                        <p className='text-[#8c8d91] text-base mt-1'>Products</p>
                    </div>
                    <div>
                        <h2 className='text-[#f59f0a] font-bold text-3xl'>99.9%</h2>
                        <p className='text-[#8c8d91] text-base mt-1'>Uptime</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form Panel */}
            <div className='bg-[#f5f5f0] flex justify-center items-center p-14'>
                <form
                    className='w-full max-w-sm space-y-5'
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    {/* Heading */}
                    <div className='mb-2'>
                        <h1 className='font-bold text-3xl text-gray-900'>Welcome back</h1>
                        <p className='text-[#8c8d91] text-sm mt-1'>
                            Enter your credentials to access your dashboard
                        </p>
                    </div>

                    {/* Email Field */}
                    <div>
                        <Label className='text-sm font-medium text-gray-800 mb-1.5 block'>
                            Email
                        </Label>
                        <Field>
                            <div className='relative'>
                                <Mail
                                    className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                                    size={16}
                                />
                                <Input
                                    type='email'
                                    {...register("email")}
                                    placeholder='you@example.com'
                                    className='pl-9 bg-white border-gray-200 focus:border-[#f59f0a] focus:ring-[#f59f0a]/20'
                                />
                            </div>
                            {errors.email && (
                                <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
                            )}
                        </Field>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className='flex items-center justify-between mb-1.5'>
                            <Label className='text-sm font-medium text-gray-800'>
                                Password
                            </Label>
                            <span className='text-[#f59f0a] text-sm font-medium cursor-pointer hover:underline'>
                                Forgot password?
                            </span>
                        </div>
                        <Field>
                            <div className='relative'>
                                <Lock
                                    className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                                    size={16}
                                />
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password")}
                                    placeholder='Enter your password'
                                    className='pl-9 pr-10 bg-white border-gray-200 focus:border-[#f59f0a] focus:ring-[#f59f0a]/20'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>
                            )}
                        </Field>
                    </div>

                    {/* Remember Me */}
                    <Field>
                        <FieldGroup className='w-full'>
                            <Field orientation='horizontal'>
                                <Checkbox
                                    id='remember-me'
                                    name='remember-me'
                                    defaultChecked
                                    className='border-[#f59f0a] data-[state=checked]:bg-[#f59f0a] data-[state=checked]:border-[#f59f0a]'
                                />
                                <FieldLabel htmlFor='remember-me' className='text-sm text-gray-600'>
                                    Remember me for 30 days
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    </Field>

                    {/* Sign In Button */}
                    <Button
                        type='submit'
                        className='w-full bg-[#f59f0a] hover:bg-[#e09008] text-white font-semibold text-base py-2.5 rounded-lg cursor-pointer flex items-center justify-center gap-2'
                    >
                        Sign in
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='18'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M5 12h14M13 6l6 6-6 6' />
                        </svg>
                    </Button>

                    {/* Divider */}
                    <div className='flex items-center gap-3'>
                        <div className='flex-1 h-px bg-gray-200' />
                        <span className='text-sm text-gray-400'>or continue with</span>
                        <div className='flex-1 h-px bg-gray-200' />
                    </div>

                    {/* Social Buttons */}
                    <div className='grid grid-cols-2 gap-3'>
                        <button
                            type='button'
                            className='flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer'
                        >
                            <svg width='18' height='18' viewBox='0 0 24 24'>
                                <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='#4285F4' />
                                <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='#34A853' />
                                <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z' fill='#FBBC05' />
                                <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='#EA4335' />
                            </svg>
                            Google
                        </button>

                        <button
                            type='button'
                            className='flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer'
                        >
                            <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                            </svg>
                            Apple
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <button type="button" onClick={() => navigate("/signup")} className='text-center text-sm text-gray-500'>
                        Don't have an account?{' '}
                        <span className='text-[#f59f0a] font-medium cursor-pointer hover:underline'>
                            Create account
                        </span>
                    </button>
                    <p>
                        <h1>Email:admin@gmail.com</h1>
                        <h1>Password:admin123</h1>
                    </p>
                </form>
            </div>

        </div >
    )
}

export default Login