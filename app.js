
(function(window){
    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    document.addEventListener("DOMContentLoaded",()=>{
        document.getElementById('requestAccess').addEventListener('click',()=>{
            const isValidEmail = validateEmail(document.getElementById('userEmail').value)
            if(!isValidEmail){
                document.querySelector('.email-error').classList.remove('hidden');
                document.querySelector('.email-error').classList.add('show');
            } else{
                document.querySelector('.email-error').classList.add('hidden');
                document.querySelector('.email-error').classList.remove('show');
            }
        })
    })

})(window)


