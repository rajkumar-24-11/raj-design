$(function() {
    $('.validity').validity({
        // selector: 'select',
        // ignore: 'select',
        messages: {
            missing: 'Campo obrigatório',
            mismatch: 'O valor informado é inválido'
        }
    })
        .on('submit', function(e) {
            var $this = $(this),
                $btn = $this.find('[type="submit"]');
                $btn.button('Use this card');

            if (!$this.valid()) {
                e.preventDefault();
                $btn.button('Use this card');
            }
    });

    $('.validity2').validity()
        .on('submit', function(e) {
            var $this = $(this),
                $btn = $this.find('[type="submit"]');
                $btn.button('Use this card');

            if (!$this.valid()) {
                e.preventDefault();
                $btn.button('Use this card');
            }
    });
});
