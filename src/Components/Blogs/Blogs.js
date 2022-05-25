import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div className='lg:px-28 lg:p-3'>

            <PageTitle title="Blogs" />

            <div className='p-10 rounded-3xl bg-white shadow-2xl my-14'>
                <h1 className='text-3xl font-semibold'>How will you improve the performance of a React Application?</h1>
                <p className='mt-3'>
                    For improve your performance of react application, first you must have to use unchangeable data structures. Data immutability forces you to think about how you structure your application data flow. In a react application dependency optimization is a important thing. Always avoid using index as key of map. Also avoid props initial States. There are many ways to optimise the react app for example lazy loading components using service workers to cache application state and many more. To successfully optimise our react application we must first find a performance problem in our application to rectify.
                </p>
            </div>
            <div className='p-10 rounded-3xl bg-white shadow-2xl my-14'>
                <h1 className='text-3xl font-semibold'>What are the different ways to manage a state in a React application?</h1>
                <p className='mt-3'>
                    There are four kinds of react state to manage. There are local state, global state, server state and last URL state. The local state is the data where we manage the data in one to another component in our react app and the local state is managed by useState hook. The data which comes from an external server is called server state. The react query package helps us to manage server state more easily. The data which is exist on how are you are else including a patner and query parameters is called URL states.
                </p>
            </div>
            <div className='p-10 rounded-3xl bg-white shadow-2xl my-14'>
                <h1 className='text-3xl font-semibold'>How does prototypical inheritance work?</h1>
                <p className='mt-3'>
                    The method and properties an internal hidden property which contains every object known as prototype. The prototypal inheritance is a feature of JavaScript. It uses to add methods and properties in objects. It is a method by which an object can inherit the properties and the methods of another object. Object.getPrototypeOf and Object are used to get and set the prototype.
                </p>
            </div>
            <div className='p-10 rounded-3xl bg-white shadow-2xl my-14'>
                <h1 className='text-3xl font-semibold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='mt-3'>
                    To get the information by search in your reactive application by the methods of JavaScript, there are methods are available. There are array.includes(), Array indexOf , Array.find() and Array.filter. the includes method returns a Boolean value either it's true or false. You can also search using index of. The index of is returns depends on the array. Using find method you can find anything in an array by giving them array index information. By using filter method you can filter anything from an array. But the search feature is more realistic with includes method. It can work perfectly than other methods. It is easier than others. There is an example of search feature using includes()
                </p>
                <div class="mockup-code mt-5">
                    <pre data-prefix="$"><code>const array = [10, 11, 3, 20, 5];</code></pre>
                    <pre data-prefix="$"><code>const includesTwenty = array.includes(20);</code></pre>
                    <pre data-prefix="$"><code>console.log(includesTwenty)</code></pre>
                </div>
            </div>
            <div className='p-10 rounded-3xl bg-white shadow-2xl my-14'>
                <h1 className='text-3xl font-semibold'>What is a unit test? Why should write unit tests?</h1>
                <p className='mt-3'>
                    Unit testing is also component testing. Is performed on standalone module to check whatever it is developed correctly. Unit test is done by developers. Unit test is mainly a process which gives us some information about our application that which functions are working correctly or which functions are not working correctly. There are a lot of unit testing tools. Every language are development has its own testing tool. Unit testing is mainly defined as a type of software or application testing where individual units or components of a software or application are tested. If we want a perfect web application or software we must use unit testing for improving user experience and more functionalities.
                </p>
            </div>
        </div>
    );
};

export default Blogs;