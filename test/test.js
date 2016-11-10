/**
 * Created by barry on 16/11/10.
 */


console.log("hello");

p = console.log;

p("wwww fffff python".split(/\s{1}/));
p("[wwww,fffff,python]".split(/\[,{1}\]/));
p("wwww,fffff,python".split(/,{1}/));

for( var tag of "wwww,fffff,python".split(/,{1}/)){
    var _tag = '<div>'+tag+'</div>';
    p(_tag);
}
