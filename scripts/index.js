// fetch get members list from database and list them on index page//
fetch('http://localhost:3000/api/members')
    .then(response => response.json())
    .then(data => {

        let membersList = [];

        console.log(data) // Prints result from `response.json()` in getRequest
        membersList = data;

        membersList.forEach(function (element) {

            // create a profile card to holde the Member information
            var profile = document.createElement("DIV");
            profile.className = "card";

            // this attribute can be set to set an id
            // profile.setAttribute("id", "profileid");

            // create an element for profile image and set it attributes from the memebersList obj
            var profileimage = document.createElement("IMG");
            profileimage.setAttribute("src", element.profileImage);
            profileimage.setAttribute("alt", "Member profile Image");
            profileimage.setAttribute("class", "profile-image")
            

            // create a div element to holde the profile infos, infos will holde any like name, lastname, phone blood type..
            var profileinformation = document.createElement("DIV");
            profileinformation.className = "profileinfo";

            // create a div element to holde the profile texts, text will holde any text in profile card like name, lastname, phone..
            var profiletexts = document.createElement("DIV");
            profiletexts.className = "profiletext";

            // create a div element to holde the profile blood type, separating blood type in a div for better designe.
            var profilebloodtype = document.createElement("DIV");
            profilebloodtype.className = "bloodtype";

            //creating a text node for name, first name, blood type
            var memberfirtname = document.createTextNode(element.firstName);
            var memberlastName = document.createTextNode(element.lastName);
            var memberbloodType = document.createTextNode(element.bloodType);
            var linebreak = document.createElement('br');

            //appending profile name, last name, blod type to the texts container
            profiletexts.appendChild(memberfirtname);
            profiletexts.appendChild(linebreak);
            profiletexts.appendChild(memberlastName);
            
            profileinformation.appendChild(profiletexts);
            profileinformation.appendChild(profilebloodtype);
            // profileinformation.appendChild(linebreak);
            profilebloodtype.appendChild(memberbloodType);

            // appending profile text container and image container to the profile container
            profile.appendChild(profileimage);
            profile.appendChild(profileinformation);
            

            // appending the profile built container to the dom
            document.getElementById("members").appendChild(profile);

        });


    })
    .catch(error => console.error(error))