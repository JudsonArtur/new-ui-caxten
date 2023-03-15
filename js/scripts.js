/* Informações do usuários no topo [ Abre e feicha o menu ]  */
$('.user-info').on('click',function(e){
     e.stopPropagation();
     $(this).find('.user-menu').toggleClass('open')
});

$('body').on('click',function(e){
     $('.user-menu').removeClass('open')
});

/* Tipos de pagamento */

 /* MESES E ANO */

$('.month-year-js label').on('click',function(e){
      e.stopPropagation();
     $('.info-year').find('input').prop('checked',false);
     $('.info-month').find('input').prop('checked',false);
     $(this).find('input').prop('checked',true);
     $('.month-year-js label').removeClass('active');
     $(this).addClass('active');
     $('.checkout-subtotal-price').addClass('open');
     $('#subtotal-price').html(`${$(this).data('price')} KZ`);
     $('#total-price').html(`${$(this).data('total')} KZ`);
     if( $('#info-year').is(":checked")){
         $('.info-month-js').removeClass('open');
         $('.info-year-js').addClass('open'); 
            
         return  
     }
     $('.info-year-js').removeClass('open');
     $('.info-month-js').addClass('open');  
 }); 

/* TRANSFERENCIA  E MULTICAIXA EXPRESS */
$('.payment-types.p-way label').on('click',function(){

     $('.pt--gateway').find('input').prop('checked',false);
     $('.pt--transfer').find('input').prop('checked',false);
     $(this).find('input').prop('checked',true);
     $('.no-click').css('display','none'); 
     $('.payment-types.p-way label').removeClass('active');
     $(this).addClass('active');
     if( $('#transfer').is(":checked")){
         $('.gateway').removeClass('open');
         $('.transfer').addClass('open'); 
         return  
     }
     $('.transfer').removeClass('open');
     $('.gateway').addClass('open');  
 });

/* ESCONDER E MOSTRAR INFORMAÇÕES */
 $('.plan-info--header').on('click', function(){
          $(this).siblings('.plan-info--body').slideToggle();
          let arr = $(this).find('.arrow').attr('name');
          if(arr === 'chevron-down-outline'){
               $(this).find('.arrow').attr('name','chevron-up-outline' );
               return
          }
          $(this).find('.arrow').attr('name','chevron-down-outline' ); 
 });

 $('.faq-item').on('click', function () {
     $(this).find('.faq-text').slideToggle();
     $(this).toggleClass('active');
     let arr = $(this).find('.faq-icon').attr('name');
     console.log(arr);
          if(arr === 'add-outline'){
               $(this).find('.faq-icon').attr('name','remove-outline' );
               return
          }
          $(this).find('.faq-icon').attr('name','add-outline' );

 });
