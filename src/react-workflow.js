import React from 'react';

function Workflow (){
    return(
        <div>
            <h1>How does it works?</h1>
            <p>While building client-side apps, a team at Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in Javascript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>

            <p>Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speedup its manipulation.</p>

            <p>Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>

        </div>

    );
}

export default Workflow;