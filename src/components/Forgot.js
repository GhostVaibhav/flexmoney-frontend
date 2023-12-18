import React from 'react'

function Forgot() {
    async function submit() {
        var phone = document.getElementById('phone-number').value;
        let response = {'phoneNumber': phone};
        response = JSON.stringify(response);

        try {
            const resp = await fetch(process.env.REACT_APP_SERVER_ADDRESS + '/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: response
            });
    
            const respJson = await resp.json();

            if(respJson['error'] !== undefined)  throw respJson['error']

            document.getElementById('enrollment-id').value = respJson.enrollmentID;
    
            document.getElementById('dialog-box-1').classList.add('hidden');
            document.getElementById('dialog-box-2').classList.remove('hidden');
            document.getElementById('dialog-box-2').classList.add('grid');
        }
        catch(err) {
            document.getElementById('enrollment-id').value = "No such user exists";
    
            document.getElementById('dialog-box-1').classList.add('hidden');
            document.getElementById('dialog-box-2').classList.remove('hidden');
            document.getElementById('dialog-box-2').classList.add('grid');
        }
    }

    return (
        <div className='w-[800px] p-8'>
            <h1 class="text-5xl font-semibold text-white">🆔<s>Did you</s> forgot your ID?</h1>

            <div id="dialog-box-1" className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-full">
                    <label for="phone-number" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
                    <div class="mt-2">
                        <input maxLength={10} type="text" name="phone-number" id="phone-number" autocomplete="phone-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <button onClick={submit} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get ID</button>
            </div>            

            <div id="dialog-box-2" className='hidden mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class="col-span-full">
                    <label for="enrollment-id" class="block text-sm font-medium leading-6 text-white">Enrollment ID</label>
                    <div class="mt-2">
                        <input disabled="true" type="text" name="enrollment-id" id="enrollment-id" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot