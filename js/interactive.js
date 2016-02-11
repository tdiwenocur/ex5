$(document).ready(function(){
    
    console.log("ready");


//hide the subtitle
$('#popup p').hide();
    console.log("hiding the popup");
    
//show the subtitle
    
$('#headthing').click(function(){
    $('#popup p').toggle();
    
});

    var substringMatcher=function(strs){
        return function findMatches(q, cb){
            var matches, substringRegex;
            
            matches = [];
            
            substrRegex = new RegExp (q, 'i');
            
            $.each(strs, function(i, str){
                if (substrRegex.test(str)){
            matches.push(str);
        
        
    }
    });

    cb(matches);
        };
    };
var states = ['Happy', 'Sad', 'Goofy', 'With Butt-Shirt',
             'Angry', 'No Words'];
    
$('#the-basics .typeahead').typeahead({
   hint: true,
   highlight: true,
   minLength: 1
},
  {  
    name: 'states',
    source: substringMatcher(states)

});




//close jquery
})