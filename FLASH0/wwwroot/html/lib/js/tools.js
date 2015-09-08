// Editor: Jean-Marie Stawikowski - HUB/WEB - 22/12/2003
// Copyright © 2004 Schneider Electric, All Rights Reserved.

function isPocketPC()
{
	return (navigator.userAgent.indexOf("Windows CE")>-1)
	    || (navigator.userAgent.indexOf("240x320")>-1);
}
