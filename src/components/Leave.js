import React, { useState } from 'react'

function Leave() {
    const loading = useState(false);

    function leave() {
        document.getElementById('enrollment--id').value = '';
    }
    return (
        <div className='w-[800px] p-8'>
            <h1 class="text-5xl font-semibold text-white">Leave the classes?</h1>

            <div id="dialog-box-1" className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-full">
                    <label for="enrollment-id" class="block text-sm font-medium leading-6 text-white">Enrollment ID</label>
                    <div class="mt-2">
                        <input maxLength={64} type="text" name="enrollment-id" id="enrollment-id" autocomplete="enrollment-id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <button onClick={leave} class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Leave</button>
            </div>
        </div>
    )
}

export default Leave