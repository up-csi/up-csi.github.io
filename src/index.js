document.forms.namedItem('contact')?.addEventListener(
    'submit',
    evt => {
        evt.preventDefault();
        evt.stopPropagation();
        // eslint-disable-next-line no-alert
        alert('This form is still work in progress!');
    },
    { capture: true },
);
