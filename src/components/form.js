import React from 'react'

function FormElt() {
    async function submit() {
        var name, age, email, batch, address, pincode, phone_number;

        name = document.getElementById('name').value;
        age = document.getElementById('age').value;
        email = document.getElementById('email').value;
        if(document.getElementById('batch').value === '6 - 7 AM') {
            batch = '6-7';
        }
        else if(document.getElementById('batch').value === '7 - 8 AM') {
            batch = '7-8';
        }
        else if(document.getElementById('batch').value === '8 - 9 AM') {
            batch = '8-9';
        }
        else if(document.getElementById('batch').value === '5 - 6 PM') {
            batch = '5-6';
        }
        address = document.getElementById('address').value;
        pincode = document.getElementById('pincode').value;
        phone_number = document.getElementById('phone-number').value;
        
        let response = {'name': name, 'age': age, 'email': email, 'batch': batch, 'address': address, 'pincode': pincode, 'phoneNumber': phone_number};
        response = JSON.stringify(response);

        try {
            const resp = await fetch(process.env.REACT_APP_SERVER_ADDRESS + '/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: response
            });
    
            const respJson = await resp.json();

            if(respJson['error'] !== undefined)  throw respJson['error']

            document.getElementById('enrollment-id').innerHTML = respJson.enrollmentID;
    
            document.getElementById('dialog-box-1').classList.add('hidden');
            document.getElementById('dialog-box-2').classList.remove('hidden');
        }
        catch(err) {
            document.getElementById('dialog-box-1').classList.add('hidden');
            document.getElementById('dialog-box-3').classList.remove('hidden');    
        }
    }

    function formPreventDefault(e) {
        e.preventDefault();
    }

    return (
        <form className='w-[800px] p-8' onSubmit={formPreventDefault}>
            <div id='dialog-box-1'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">📑Enroll today!</h1>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Name</label>
                            <div className="mt-2">
                                <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="age" className="block text-sm font-medium leading-6 text-white">Age</label>
                            <div className="mt-2">
                                <input min={18} max={65} type="number" name="age" id="age" autoComplete="age" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="batch" className="block text-sm font-medium leading-6 text-white">Batch</label>
                            <div className="mt-2">
                                <select id="batch" name="batch" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>6 - 7 AM</option>
                                    <option>7 - 8 AM</option>
                                    <option>8 - 9 AM</option>
                                    <option>5 - 6 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-white">Address</label>
                            <div className="mt-2">
                                <input maxLength={250} type="text" name="address" id="address" autoComplete="address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-white">Pincode</label>
                            <div className="mt-2">
                                <input maxLength={6} type="text" name="pincode" id="pincode" autoComplete="pincode" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-white">Phone Number</label>
                            <div className="mt-2">
                                <input maxLength={10} type="text" name="phone-number" id="phone-number" autoComplete="phone-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="reset" className="text-sm font-semibold leading-6 text-white">Reset</button>
                    <button onClick={submit} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div>

            <div id='dialog-box-2' className='hidden'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">✔Enrollment successful!</h1>
                    <div className='mt-10'>Your enrollment number is&nbsp;<div className='font-bold' id='enrollment-id'></div></div>
                </div>
            </div>
            
            <div id='dialog-box-3' className='hidden'>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-5xl font-semibold text-white">❗Enrollment unsuccessful!</h1>
                </div>
            </div>

        </form >
    )
}

export default FormElt