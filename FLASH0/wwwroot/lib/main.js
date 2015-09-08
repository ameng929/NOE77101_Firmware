// Editor: Jean-Marie Stawikowski - HUB/WEB - 22/12/2003
// Copyright © 2004 Schneider Electric, All Rights Reserved.


function getLanguage()
{
  var query = document.location.search.substring(1);
  var vars = query.split("&");

  for (var i=0; i<vars.length; i++)
  {
    var pair = vars[i].split("=");
    if (pair[0]=="Language")
    {
      return pair[1];
    }
  } 
}


