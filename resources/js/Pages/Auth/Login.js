import React, { useEffect } from 'react'
import { Head, Link, useForm } from '@inertiajs/inertia-react'

import Guest from '@/Layouts/Guest'
import ValidationErrors from '@/Components/ValidationErrors'
import ImageLight from '@/Assets/img/login-office.jpeg'
import ImageDark from '@/Assets/img/login-office-dark.jpeg'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        post(route('login'))
    }

    return (
        <Guest>
            <Head title="Log in" />
            <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img
                                aria-hidden="true"
                                className="object-cover w-full h-full dark:hidden"
                                src={ImageLight}
                                alt="Office"
                            />
                            <img
                                aria-hidden="true"
                                className="hidden object-cover w-full h-full dark:block"
                                src={ImageDark}
                                alt="Office"
                            />
                        </div>
                        <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                    Login
                                </h1>
                                {status && (
                                    <div className="mb-4 font-medium text-sm text-green-600">
                                        {status}
                                    </div>
                                )}

                                <ValidationErrors errors={errors} />

                                <label className="block text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">
                                        Email
                                    </span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="Jane Doe"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        autoFocus={true}
                                        onChange={onHandleChange}
                                    />
                                </label>
                                <label className="block mt-4 text-sm">
                                    <span className="text-gray-700 dark:text-gray-400">
                                        Password
                                    </span>
                                    <input
                                        className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                        placeholder="***************"
                                        type="password"
                                        placeholder="***************"
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={onHandleChange}
                                    />
                                </label>

                                <button
                                    className="block w-full px-4 py-2 mt-4 text-sm text-white font-medium leading-5 text-center transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    onClick={submit}
                                    disabled={processing}
                                >
                                    Log in
                                </button>

                                <hr className="my-8" />

                                {canResetPassword && (
                                    <p className="mt-4">
                                        <Link
                                            href={route('password.request')}
                                            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </p>
                                )}
                                <p className="mt-1">
                                    <Link
                                        className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                        href={route('register')}
                                    >
                                        Create account
                                    </Link>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
