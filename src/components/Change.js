import React, { useEffect, useState } from 'react'

function Change() {
    const loading = useState(false);
    useEffect(() => {
        document.getElementById('enrollment-id').addEventListener('keydown', retrieve);
    }, [retrieve]);
    function retrieve() {
        if(document.getElementById('enrollment-id').value.length === 64) {
            // get the value of the current batch from the database
            loading(true);
            
            loading(false);

            // set the value of the current batch to the input field
            document.getElementById('current-batch').value = '6 - 7 AM'
        }
    }
    return (
        <div className='w-[800px] p-8'>
            <div className='flex flex-col'>
                <h1 class="text-5xl font-semibold text-white">Want to change the batch?</h1>
                <h1 class="text-xl font-extralight text-white self-end">No issues!</h1>
            </div>

            <div id="dialog-box-1" className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-6">
                    <label for="enrollment-id" class="block text-sm font-medium leading-6 text-white">Enrollment ID</label>
                    <div class="mt-2">
                        <input maxLength={64} type="text" name="enrollment-id" id="enrollment-id" autocomplete="enrollment-id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="col-span-3">
                    <label for="current-batch" class="block text-sm font-medium leading-6 text-white">Current Batch</label>
                    <div class="mt-2">
                        <input disabled="true" type="text" name="current-batch" id="current-batch" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div class="col-span-3">
                    <label for="new-batch" class="block text-sm font-medium leading-6 text-white">New Batch</label>
                    <div class="mt-2">
                        <select id="new-batch" name="new-batch" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option>6 - 7 AM</option>
                            <option>7 - 8 AM</option>
                            <option>8 - 9 AM</option>
                            <option>5 - 6 PM</option>
                        </select>
                    </div>
                </div>

                <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Change</button>
            </div>
        </div>
    )
}

export default Change