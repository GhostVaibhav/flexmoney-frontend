import React from 'react'

function Leave() {
    async function leave() {
        var enrollmentID = document.getElementById('enrollment-id').value;
        let response = { 'enrollmentID': enrollmentID };
        response = JSON.stringify(response);

        try {
            const resp = await fetch('http://localhost:3001/leave', {
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
            document.getElementById('dialog-box-1').classList.add('hidden');
            document.getElementById('dialog-box-3').classList.remove('hidden');
        }
    }
    return (
        <div className='w-[800px] p-8'>
            <h1 class="text-5xl font-semibold text-white">😓<s>Why</s> leave the classes?</h1>

            <div id="dialog-box-1" className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-full">
                    <label for="enrollment-id" class="block text-sm font-medium leading-6 text-white">Enrollment ID</label>
                    <div class="mt-2">
                        <input maxLength={64} type="text" name="enrollment-id" id="enrollment-id" autocomplete="enrollment-id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <button onClick={leave} class="w-full md:w-max rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Leave</button>
            </div>

            <div id="dialog-box-2" className='hidden mt-10'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">😢You left the classes!</h1>
                </div>
            </div>

            <div id="dialog-box-3" className='hidden mt-10'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">😴Ohh...huhh..An error occured!</h1>
                </div>
            </div>
        </div>
    )
}

export default Leave