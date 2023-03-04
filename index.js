window.onload = function (){
    document.getElementById('searchBtn').onclick = function (){
        var searchInput = document.getElementById('searchInput');
        if (searchInput.value.toLowerCase() == 'merge'){
            document.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'> <input title='Enter project to search for' type='search'  aria-autocomplete='both' spellcheck='true' class='searchInput' id='searchInput' style=' position: relative; left: 70%;'><button class='btn btn-outline-danger  searchBtn' id='searchBtn' style=' position: relative; left: 70%;'>search</button><h1>Search results for <i>Merge</i></h1><i>2nd March 2023</i><br><br><p><b><i>Merge</i></b> is an application built entirely out of <a href='https://python.org'><i>python3</i></a>. The tool can be used to convert Python source to a standalone .exe executable file.</p>", )
        }
        else{
            alert("No result for '" + searchInput.value + "' found")
        }
    }
}

