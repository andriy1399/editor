'use strict';

$(function () {
    // on and off bold text
    $('.btn_bold_text').click(() => {
        $('.text').toggleClass('toggle_text_bold')
    })
    //--------------------------------------------------
    // on and off cursive text
    $('.btn_italic_text').click(() => {
        $('.text').toggleClass('toggle_cursive_text')
    })
    //--------------------------------------------------
    // on and off text-decoration  underline
    $('.btn_underLine_text').click(() => {
        $('.text').removeClass('toggle_lineThrough');
        $('.text').toggleClass('toggle_underline');
    })
    //--------------------------------------------------
    // on and off text-decoration  lineThrough
    $('.btn_lineThrough_text').click(() => {
        $('.text').removeClass('toggle_underline');
        $('.text').toggleClass('toggle_lineThrough')
    })
    //--------------------------------------------------

    // align-text left
    $('.btn_text_left').click(() => {
        $('.text').addClass('add_text_left');
        $('.text').removeClass('add_text_center');
        $('.text').removeClass('add_text_right');
    })
    //--------------------------------------------------
    // align-text center
    $('.btn_text_center').click(() => {
        $('.text').removeClass('add_text_left');
        $('.text').addClass('add_text_center');
        $('.text').removeClass('add_text_right');
    })
    //--------------------------------------------------
    // align-text right
    $('.btn_text_right').click(() => {
        $('.text').removeClass('add_text_left');
        $('.text').removeClass('add_text_center');
        $('.text').addClass('add_text_right');
    })
    //--------------------------------------------------
    // on and off block 'choose_font_family'
    $('.btn_font_family').click(() => {
        $('.choose_font_family').toggle();
        $('.choose_font_size').hide();
    })
    //--------------------------------------------------
    // chooses some font-family
    $('.font_family').click(function () {
        $('.text').css('font-family', $(event.target).text())
        $('.choose_font_family').hide();
    })
    //--------------------------------------------------
    // on and off block 'choose_font_size'
    $('.btn_font_size').click(() => {
        $('.choose_font_size').toggle();
        $('.choose_font_family').hide();

    })
    //--------------------------------------------------
    // chooses some font-size
    $('.font_size').click(function () {
        $('.text').css('font-size', $(event.target).text())
        $('.choose_font_size').hide();
    })
    //--------------------------------------------------
    // opens the opacity window and opens block choose_text_color with animation
    $('.btn_text_color').click(() => {
        $('.opacityWindow').fadeIn();
        $('.choose_text_color').animate({
            marginTop: '30px'
        }, 300)
    })
    //--------------------------------------------------
    // this function closes block choose_text_color with animation and close opacity window 
    $('.svg_close').click(() => {
        $('.opacityWindow').fadeOut()
        $('.choose_text_color').animate({
            marginTop: '-150px'
        }, 300)
        $('.opacityWindow_bg').fadeOut();
        $('.choose_background').animate({
            marginTop: '-150px'
        }, 300)

    })
    //--------------------------------------------------
    // chooses some text color
    $('.choose_txtC .color').click(() => {
        $('.text').css('color', $(event.target).css('background-color'))
    })
    //--------------------------------------------------

    // opens the opacity window and opens block choose_background with animation

    $('.btn_background').click(() => {
        $('.opacityWindow_bg').fadeIn();
        $('.choose_background').animate({
            marginTop: '30px'
        }, 300)
    })
    //--------------------------------------------------
    // chooses some background-color
    $('.color_container_for_bg .color').click(() => {
        $('body').css('background-image', 'none')
        $('body').css('background-color', $(event.target).css('background-color'));
    })
    //--------------------------------------------------
    // opens color_container_for_bg 
    $('#color').click(function () {
        $('#color').addClass('active_btn');
        $('#image').removeClass('active_btn');
        $('#file').removeClass('active_btn');
        $('.color_container_for_bg').show();
        $('.img_container_hide').hide();
        $('.file_container').hide()
        $('.choose_background').removeClass('small_container_for_file');
    })
    //--------------------------------------------------
    // opens img_container_hide 
    $('#image').click(function () {
        $('#image').addClass('active_btn');
        $('#color').removeClass('active_btn');
        $('#file').removeClass('active_btn');
        $('.color_container_for_bg').hide();
        $('.img_container_hide').show();
        $('.file_container').hide();
        $('.choose_background').removeClass('small_container_for_file');
    })
    //--------------------------------------------------
    // opens file_container 

    $('#file').click(function () {
        $('#file').addClass('active_btn');
        $('#color').removeClass('active_btn');
        $('#image').removeClass('active_btn');
        $('.color_container_for_bg').hide();
        $('.img_container_hide').hide();
        $('.file_container').show();
        $('.choose_background').addClass('small_container_for_file');
    })
    //--------------------------------------------------
    // chooses some background-image choose from the proposed
    $('.img').click(function (event) {
        $('body').css('background-image', $(event.target).css('background-image'))
    })
    //--------------------------------------------------
    // chooses some background-image choose from file
    $(' #some_files').change(function () {
        let getUrl = URL.createObjectURL(event.target.files[0]);
        $('body').css('background-image', `url(${getUrl})`)
    })
    //--------------------------------------------------
    // open block singIn and block singOut with animation
    let singIn_true = false
    let redFocus = false
    $('.btn_login').click(function () {
        if (singIn_true === false) {
            $('.opacityWindow_sing_in').fadeIn();
            $('.block_singIn').animate({
                marginTop: '30px'
            }, 300)
        }
        if (singIn_true === true) {
            $('.opacityWindow_sing_out').fadeIn();
            $('.box_for_btn').animate({
                marginTop: '300px'
            }, 300)
        }
    })
    //--------------------------------------------------

    $('.cancel').click(function () {
        $('.opacityWindow_sing_out').fadeOut();
        $('.box_for_btn').animate({
            marginTop: '0px'
        }, 200)
    })

    // sing out 

    $('.btn_sing_out').click(function () {
        $('.opacityWindow_sing_out').fadeOut();
        $('.box_for_btn').animate({
            marginTop: '0px'
        }, 200)
        $('.btn_html_edit').removeClass('onEditBtn');
        $('.btn_login').removeClass('btn_login_lock_true')
        singIn_true = false;

    })
    //--------------------------------------------------
    // checks the login and password and logs in
    $('.input_btn_singIn').click(function () {
        const checkLogin = /^admin$/i;
        const checkPassword = /^admin123$/;
        const loginValue = $('.login_input').val();
        const passwordValue = $('.password_input').val();
        const resultLogin = checkLogin.test(loginValue);
        const resultPassword = checkPassword.test(passwordValue);
        if (resultLogin === true && resultPassword === true) {
            $('.opacityWindow_sing_in').fadeOut();
            $('.form_singIn .warning').text('');
            $('.login_input').css('box-shadow', '');
            $('.password_input').css('box-shadow', '');
            $('.form_singIn').trigger('reset');
            $('.btn_html_edit').addClass('onEditBtn');
            $('.btn_login').addClass('btn_login_lock_true')
            $('.block_singIn').animate({
                marginTop: '-150px'
            }, 300)
            redFocus = false
            singIn_true = true;
        } else if (loginValue === '' || passwordValue === '') {
            $('.form_singIn .warning').text('Value is empty!');
            $('.login_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
            $('.password_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
            redFocus = true
        } else {
            $('.form_singIn .warning').text('Please check your login or password!');
            $('.login_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
            $('.password_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
            redFocus = true
        }
    })
    //--------------------------------------------------
    $('.login_input').focus(function () {
        if (redFocus === true) {
            $('.login_input').css('box-shadow', '0 0 4px 2px rgba(199, 0, 0, 0.842)');
        }
    })
    $('.password_input').focus(function () {
        if (redFocus === true) {
            $('.password_input').css('box-shadow', '0 0 4px 2px rgba(199, 0, 0, 0.842)');
        }
    })
    $('.login_input').blur(function () {
        if (redFocus === true) {
            $('.login_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        }
    })

    $('.password_input').blur(function () {
        if (redFocus === true) {
            $('.password_input').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        }
    })


    $('.btn_html_edit').click(function () {
        if (singIn_true === true) {
            $('.content').hide();
            $('.content_edit').show();
            $('#edit_text_content').val($('.text').html())
        }
    })

    $('.btn_for_Save').click(function () {
        $('.content').show();
        $('.content_edit').hide();
        $('.text').html($('#edit_text_content').val())
    })

    $('.btn_for_table').click(function () {
        $('.create_table_and_list_window_opacity').fadeIn(400);
        $('.create_table_block').show(0).animate({
            margin: '50px auto'
        }, 400);
    })

    $('.close_table').click(function () {

        $('.create_table_block').animate({
            margin: '-250px auto'
        }, 400).hide(400);
        $('.create_table_and_list_window_opacity').fadeOut(400);
        $('.create_table_form').trigger('reset');
        $('.input_create_table').each(function (i, item) {
            $(item).css('box-shadow', '')
        })
    })


    $('.btn_reset_table').click(function () {
        $('.create_table_form').trigger('reset');
        $('.input_create_table').each(function (i, item) {
            $(item).css('box-shadow', '')
        })

    })

    //  this function create a table
    //  but before checks the correct filling fo the form
    $('.btn_create_table').click(function () {

        const trCount = $('.input_create_table[name="tr_counter"]').val();
        const tdCount = $('.input_create_table[name="td_counter"]').val();
        const tdWidth = $('.input_create_table[name="width_td"]').val();
        const tdHeight = $('.input_create_table[name="height_td"]').val();
        const bdWidth = $('.input_create_table[name="width_border"]').val();
        const bdStyle = $('.input_create_table[name="border_style"]').val();
        const bdColor = $('.input_create_table[name="border_color"]').val();
        console.log(bdStyle, bdColor);

        const checkInput = /^[\d]{1,3}$/;
        let check_valid_form_tableCreate1 = 0;
        $('.for_check_input').each(function (i, item) {
            if (checkInput.test($(item).val()) === false) {
                $(item).css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
            } else {
                $(item).css('box-shadow', '')
                check_valid_form_tableCreate1++;
            }

        })
        if ($('select[name="border_style"]').val() == null) {
            $('select[name="border_style"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        } else {
            $('select[name="border_style"]').css('box-shadow', '');
            check_valid_form_tableCreate1++;
        }

        if ($('select[name="border_color"]').val() == null) {
            $('select[name="border_color"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        } else {
            $('select[name="border_color"]').css('box-shadow', '');
            check_valid_form_tableCreate1++;
        }


        if (check_valid_form_tableCreate1 === 7) {
            let c = ''
            let a = `<table>`
            let b = $('#edit_text_content').val()
            a = b + ' ' + a
            for (let i = 1; i <= trCount; i++) {
                a += '<tr>'
                for (let j = 1; j <= tdCount; j++) {
                    c += `<td style=" width:${tdWidth}px; height:${tdHeight}px; border: ${bdWidth}px ${bdStyle} ${bdColor};">TD</td>`
                }
                a += c
                a += '</tr>'
                c = ''
            }
            a += '</table>'
            $('#edit_text_content').val(a)


            $('.create_table_block .warning').text('');

        } else {
            $('.create_table_block .warning').text('Invalid value');
        }
    })


    //--------------------------------------------------


    $('.btn_for_Ol').click(function () {
        $('.create_table_and_list_window_opacity').fadeIn(400);
        $('.create_list_ol').show(0).animate({
            margin: '50px auto'
        }, 400);
    })

    $('.create_list_ol .close_list').click(function () {

        $('.create_list_ol').animate({
            margin: '-250px auto'
        }, 400).hide(400);
        $('.create_table_and_list_window_opacity').fadeOut(400);
        $('.create_list_ol .form_for_list').trigger('reset');
        $('.input_for_list').each(function (i, item) {
            $(item).css('box-shadow', '')
            $('.create_list_ol .warning').text('');
        })
    })


    $('.create_list_ol .btn_reset_list').click(function () {
        $('.create_list_ol .form_for_list').trigger('reset');
        $('.input_for_list').each(function (i, item) {
            $(item).css('box-shadow', '')
            $('.create_list_ol .warning').text('');
        })
    })
    //  this function create the list Ol
    //  but before checks the correct filling fo the form
    $('.create_list_ol .btn_create_list2').click(function () {
        let x = false;
        let y = false;
        const countLi = $('.input_for_list[name="count_li_ol"]').val();
        const typeOfLi = $('.input_for_list[name="list_options"]').val();
        const checkList = /^[\d]{1,3}$/
        if (checkList.test(countLi) === false) {
            $('.input_for_list[name="count_li_ol"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        } else {
            $('.input_for_list[name="count_li_ol"]').css('box-shadow', '')
            y = true;
        }
        if ($('.input_for_list[name="list_options"]').val() == null) {
            $('.input_for_list[name="list_options"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)')
        } else {
            $('.input_for_list[name="list_options"]').css('box-shadow', '');
            x = true;
        }
        if (x === true && y === true) {
            $('.create_list_ol .warning').text('');
            let b = $('#edit_text_content').val();
            let a = `<ol style="list-style-type: ${typeOfLi}; margin-left: 20px; margin-top: 10px;">`;
            a = b + a
            for (let i = 1; i <= countLi; i++) {
                a += `<li>List item</li>`
            }
            a += '</ol>'
            $('#edit_text_content').val(a)
        } else {
            $('.create_list_ol .warning').text('Invalid value');
        }
    })

    //--------------------------------------------------




    $('.btn_for_Ul').click(function () {
        $('.create_table_and_list_window_opacity').fadeIn(400);
        $('.create_list_ul').show(0).animate({
            margin: '50px auto'
        }, 400);
    })

    $('.create_list_ul .close_list').click(function () {

        $('.create_list_ul').animate({
            margin: '-250px auto'
        }, 400).hide(400);
        $('.create_table_and_list_window_opacity').fadeOut(400);
        $('.create_list_ul .form_for_list').trigger('reset');
        $('.input_for_list').each(function (i, item) {
            $(item).css('box-shadow', '')
            $('.create_list_ul .warning').text('');
        })
    })



    $('.create_list_ul .btn_reset_list').click(function () {
        $('.create_list_ul .form_for_list').trigger('reset');
        $('.input_for_list').each(function (i, item) {
            $(item).css('box-shadow', '')
            $('.create_list_ul .warning').text('');
        })
    })
    //  this function create the list Ul
    //  but before checks the correct filling fo the form

    $('.create_list_ul .btn_create_list2').click(function () {
        let x = false;
        let y = false;
        const countLi = $('.input_for_list[name="count_li_ul"]').val();
        const typeOfLi = $('.input_for_list[name="list_options2"]').val();
        const checkList = /^[\d]{1,3}$/
        if (checkList.test(countLi) === false) {
            $('.input_for_list[name="count_li_ul"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)');
        } else {
            $('.input_for_list[name="count_li_ul"]').css('box-shadow', '')
            y = true;
        }

        if ($('.input_for_list[name="list_options2"]').val() == null) {
            $('.input_for_list[name="list_options2"]').css('box-shadow', '0 0 2px 1px rgba(199, 0, 0, 0.842)')
        } else {
            $('.input_for_list[name="list_options2"]').css('box-shadow', '');
            x = true;
        }
        if (x === true && y === true) {
            $('.create_list_ul .warning').text('');
            let b = $('#edit_text_content').val();
            let a = `<ul style="list-style-type: ${typeOfLi}; margin-left: 20px; margin-top: 10px;">`;
            a = b + a
            for (let i = 1; i <= countLi; i++) {
                a += `<li>List item</li>`
            }
            a += '</ul>'
            $('#edit_text_content').val(a)
        } else {
            $('.create_list_ul .warning').text('Invalid value');
        }
    })
    //----------------------------------------------------------------------------------------------
})//-----------------------------------------------------------------------------------------------------------