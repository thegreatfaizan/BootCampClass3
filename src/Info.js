import React from 'react';

function Info(props){
    return(
        <footer>
            <p>Created By {props.Name}</p>
    <p><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcRwRCMjKrJwMdRMkJwtZnFRDjjqRxfLFTljbQVvscxjSDzNwlMXLGnjmNvhRZhlJBGbmsKTj">{props.Email}</a></p>
        </footer>
    );
}

export default Info;