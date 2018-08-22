// Select DOM Items
const menuBtn = document.querySelector( '.menu-btn' );
const menu = document.querySelector( '.menu' );
const menuNav = document.querySelector( '.menu-nav' );
const menuBranding = document.querySelector( '.menu-branding' );
const navItems = document.querySelectorAll( '.nav-item' );

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener( 'click', toggleMenu );

function toggleMenu() {
    if ( !showMenu ) {
        menuBtn.classList.add( 'close' );
        menu.classList.add( 'show' );
        menuNav.classList.add( 'show' );
        menuBranding.classList.add( 'show' );
        navItems.forEach( item => item.classList.add( 'show' ) );
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove( 'close' );
        menu.classList.remove( 'show' );
        menuNav.classList.remove( 'show' );
        menuBranding.classList.remove( 'show' );
        navItems.forEach( item => item.classList.remove( 'show' ) );
        // Set Menu State
        showMenu = false;
    }
}

//Get Full year in footer
const newDate = new Date().getFullYear();
const owner = 'Sumit Yadav'
document.getElementById( "main-footer" ).innerHTML = `Copyright &copy; ${newDate} ${owner}`;

// Trim the project Description.
const yourString = document.getElementsByClassName( "project__description" )
let x = '';
for ( var i = 0; i < yourString.length; i++ ) {
    x = document.getElementsByClassName( "project__description" )[i].innerHTML;
    const maxLength = 300;
    const trimmedString = x.substr( 0, maxLength );
    yourString[i].innerHTML = `${trimmedString}...`;
}

// JS For mail
$( function () {
    // Get the form.
    var form = $( '#ajax-contact' );

    // Get the messages div.
    var formMessages = $( '#form-messages' );

    $( form ).submit( function ( event ) {

        // Stop the browser from submitting the form.
        var formData = $( form ).serialize();
        event.preventDefault();
        $.ajax( {
            type: 'POST',
            url: $( form ).attr( 'action' ),
            data: formData
        } ).done( function ( response ) {
            console.log( 'Enter mail' )

            // Make sure that the formMessages div has the 'success' class.
            $( formMessages ).removeClass( 'error' );
            $( formMessages ).addClass( 'success' );

            // Set the message text.
            $( formMessages ).text( response );

            // Clear the form.
            $( '#name' ).val( '' );
            $( '#email' ).val( '' );
            $( '#mno' ).val( '' );
            $( '#message' ).val( '' );
        } )
        // TODO
    } );
} );