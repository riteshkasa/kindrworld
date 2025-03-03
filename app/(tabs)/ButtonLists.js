var volunteerLocationList = new Set();
volunteerLocationList.add("https://www.volunteermatch.org/search/?l=Los%20Angeles");
volunteerLocationList.add("https://www.volunteermatch.org/search/?l=Santa+Monica%2C+CA%2C+USA&v=true");
volunteerLocationList.add("https://www.volunteermatch.org/search/?l=Long+Beach%2C+CA%2C+USA&v=true");
var categoryList = new Set();
categoryList.add("13"); //env
categoryList.add("12"); //seniors
categoryList.add("15"); //education

export function getList(i,j)
{
    return volunteerLocationList[i] + "&v=true&cats=" + categoryList[j];
}