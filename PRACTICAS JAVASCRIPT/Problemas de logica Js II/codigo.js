let dineroCofla;
//let dineroRoberto;
//let dineroPedro;
dineroCofla=prompt('cuanto dinero tienes Cofla');

dineroCofla=parseInt(dineroCofla);
//dineroRoberto=prompt('cuanto dinero tienes Roberto');
//dineroPedro=prompt('cuanto dinero tienes Pedro');

if(dineroCofla>=0.6 && dineroCofla<1){
    alert('comprate el helado de agua');
    alert('y te sobran' + (dineroCofla - 0.6));

}
else if(dineroCofla>=1 && dineroCofla<1.6){
    alert('comprate el heladix');
    alert('y te sobran' + (dineroCofla - 1));
}

else if(dineroCofla>=1.6 && dineroCofla<1.7){
    alert('comprate el heladovich');
    alert('y te sobran' + (dineroCofla - 1.6));
}
else if(dineroCofla>=1.7 && dineroCofla<1.8){
    alert('comprate el helarado');
    alert('y te sobran' + (dineroCofla - 1.7));
}
else if(dineroCofla>=1.8 && dineroCofla<2.9){
    alert('comprate el potecito con confites');
    alert('y te sobran' + (dineroCofla - 1.8));
}
else if(dineroCofla>=2.9){
    alert('comprate el helado con confites o helado de 1/4');
    alert('y te sobran' + (dineroCofla - 2.9));
} else{
    alert('lo siento no te alcanza para nada');
}





