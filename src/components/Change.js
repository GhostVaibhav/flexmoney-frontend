import React from 'react'

function Change() {
    async function retrieve() {
        if (document.getElementById('enrollment-id').value.length === 64) {
            var enrollmentID = document.getElementById('enrollment-id').value;
            let response = { 'enrollmentID': enrollmentID };
            response = JSON.stringify(response);

            try {
                const resp = await fetch(process.env.REACT_APP_SERVER_ADDRESS + '/getb', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: response
                });

                const respJson = await resp.json();

                if (respJson['error'] !== undefined) throw respJson['error']

                if (respJson.batch === '6-7') {
                    document.getElementById('current-batch').value = '6 - 7 AM'
                }
                else if (respJson.batch === '7-8') {
                    document.getElementById('current-batch').value = '7 - 8 AM'
                }
                else if (respJson.batch === '8-9') {
                    document.getElementById('current-batch').value = '8 - 9 AM'
                }
                else if (respJson.batch === '5-6') {
                    document.getElementById('current-batch').value = '5 - 6 PM'
                }
            }
            catch (err) {
                document.getElementById('current-batch').value = "No such user exists";
            }
        }
    }
    async function change() {
        if (document.getElementById('current-batch').value !== document.getElementById('new-batch').value) {
            var enrollmentID = document.getElementById('enrollment-id').value;
            var batch = document.getElementById('new-batch').value;
            if(batch === '6 - 7 AM') {
                batch = '6-7';
            }
            else if(batch === '7 - 8 AM') {
                batch = '7-8';
            }
            else if(batch === '8 - 9 AM') {
                batch = '8-9';
            }
            else if(batch === '5 - 6 PM') {
                batch = '5-6';
            }
            let response = { 'enrollmentID': enrollmentID, 'batch': batch };
            response = JSON.stringify(response);

            try {
                const resp = await fetch(process.env.REACT_APP_SERVER_ADDRESS + '/change', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: response
                });

                const respJson = await resp.json();

                if (respJson['error'] !== undefined) throw respJson['error']

                document.getElementById('dialog-box-1').classList.add('hidden');
                document.getElementById('dialog-box-2').classList.remove('hidden');
            }
            catch (err) {
                document.getElementById('new-batch').value = "No such user exists";
            }
        }
    }
    return (
        <div className='w-[800px] p-8'>
            <div className='flex flex-col'>
                <h1 class="text-5xl font-semibold text-white">🧘‍♂️<s>Want to</s> change the batch?</h1>
                <h1 class="text-xl font-extralight text-white self-end">No issues!</h1>
            </div>

            <div id="dialog-box-1" className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-5">
                    <label for="enrollment-id" class="block text-sm font-medium leading-6 text-white">Enrollment ID</label>
                    <div class="mt-2">
                        <input maxLength={64} type="text" name="enrollment-id" id="enrollment-id" autocomplete="enrollment-id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='flex w-full items-end'>
                    <button onClick={retrieve} class="rounded-md w-full h-fit bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Check</button>
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

                <button onClick={change} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Change</button>
            </div>

            <div id="dialog-box-2" className='hidden mt-10'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">✔Batch changed!</h1>
                </div>
            </div>
        </div>
    )
}

export default Change