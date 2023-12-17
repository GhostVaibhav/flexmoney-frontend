import React from 'react'

function FormElt() {
    return (
        <form className='w-[800px] p-8'>
            <div>
                <div class="border-b border-gray-900/10 pb-12">
                    <h1 class="text-5xl font-semibold text-white">Enroll today!</h1>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="name" class="block text-sm font-medium leading-6 text-white">Name</label>
                            <div class="mt-2">
                                <input type="text" name="name" id="name" autocomplete="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="age" class="block text-sm font-medium leading-6 text-white">Age</label>
                            <div class="mt-2">
                                <input type="number" name="age" id="age" autocomplete="age" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="batch" class="block text-sm font-medium leading-6 text-white">Batch</label>
                            <div class="mt-2">
                                <select id="batch" name="batch" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>6 - 7 AM</option>
                                    <option>7 - 8 AM</option>
                                    <option>8 - 9 AM</option>
                                    <option>5 - 6 PM</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="address" class="block text-sm font-medium leading-6 text-white">Address</label>
                            <div class="mt-2">
                                <input maxLength={250} type="text" name="address" id="address" autocomplete="address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="pincode" class="block text-sm font-medium leading-6 text-white">Pincode</label>
                            <div class="mt-2">
                                <input maxLength={6} type="text" name="pincode" id="pincode" autocomplete="pincode" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="phone-number" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
                            <div class="mt-2">
                                <input maxLength={10} type="text" name="phone-number" id="phone-number" autocomplete="phone-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="reset" class="text-sm font-semibold leading-6 text-white">Reset</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form >
    )
}

export default FormElt