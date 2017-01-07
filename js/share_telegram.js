(function ($) {
    Drupal.behaviors.share_telegram = {
        attach: function(context) {
            var url = 'https://telegram.me/share/url?url='+Drupal.settings.share_telegram.base_path+'&text='+$(Drupal.settings.share_telegram.telegram_share_sharing_title).text();
            $(Drupal.settings.share_telegram.telegram_share_sharing_location).append('<a target="_blank" href="'+url+'" class="telegram_btn ' + Drupal.settings.share_telegram.telegram_share_button_size + '"style="margin:1px;">' + Drupal.settings.share_telegram.telegram_share_button_text + '</a>');
        }
    }

})(jQuery);

