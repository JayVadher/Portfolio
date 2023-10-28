function changeMode() {

    var scent_mode = document.querySelectorAll("input[name=scent]");
    var scent_title = document.getElementById("scent_title");
    var scent_info = document.getElementById("scent_info");


    scent_mode.forEach(e  => {
            
        var body = document.getElementById("body");

        if (e.checked == true) {
            body.setAttribute("class", "");
            body.classList.add(e.id + "_mode");

            if (e.id == "rasp_apple") {
                scent_title.innerHTML = "Raspberry & Apple";
                scent_info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus ipsa doloremque. Repellat libero fuga officia quae delectus nesciunt illo soluta, sit natus quibusdam mollitia aperiam, ullam nulla officiis dolor.";
            } else if (e.id == "lemon") {
                scent_title.innerHTML = "Lemon";
                scent_info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus ipsa doloremque. Repellat libero fuga officia quae , sit natus quibusdam mollitia aperiam, ullam nulla officiis dolor.";
            } else if (e.id == "lime") {
                scent_title.innerHTML = "Lime";
                scent_info.innerHTML = "Lorem ipsum dolor. Quia necessitatibus ipsa doloremque. Repellat libero fuga officia quae delectus nesciunt illo soluta, sit natus quibusdam mollitia aperiam, ullam nulla officiis dolor. Quia necessitatibus ipsa doloremque. Repellat libero fuga officia quae , sit natus quibusdam mollitia aperiam, ullam nulla officiis dolor.";
            } else if (e.id == "original") {
                scent_title.innerHTML = "Original";
                scent_info.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero fuga officia quae delectus nesciunt illo soluta";
            }
        }

      
        
    });
}

