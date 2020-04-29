<?php
global $theme_sidebars;
$places = array();
foreach ($theme_sidebars as $sidebar){
    if ($sidebar['group'] !== 'footer')
        continue;
    $widgets = theme_get_dynamic_sidebar_data($sidebar['id']);
    if (!is_array($widgets) || count($widgets) < 1)
        continue;
    $places[$sidebar['id']] = $widgets;
}
$place_count = count($places);
$needLayout = ($place_count > 1);
if (theme_get_option('theme_override_default_footer_content')) {
    if ($place_count > 0) {
        $centred_begin = '<div class="art-center-wrapper"><div class="art-center-inner">';
        $centred_end = '</div></div><div class="clearfix"> </div>';
        if ($needLayout) { ?>
<div class="art-content-layout">
    <div class="art-content-layout-row">
        <?php 
        }
        foreach ($places as $widgets) { 
            if ($needLayout) { ?>
            <div class="art-layout-cell art-layout-cell-size<?php echo $place_count; ?>">
            <?php 
            }
            $centred = false;
            foreach ($widgets as $widget) {
                 $is_simple = ('simple' == $widget['style']);
                 if ($is_simple) {
                     $widget['class'] = implode(' ', array_merge(explode(' ', theme_get_array_value($widget, 'class', '')), array('art-footer-text')));
                 }
                 if (false === $centred && $is_simple) {
                     $centred = true;
                     echo $centred_begin;
                 }
                 if (true === $centred && !$is_simple) {
                     $centred = false;
                     echo $centred_end;
                 }
                 theme_print_widget($widget);
            } 
            if (true === $centred) {
                echo $centred_end;
            }
            if ($needLayout) {
           ?>
            </div>
        <?php 
            }
        } 
        if ($needLayout) { ?>
    </div>
</div>
        <?php 
        }
    }
?>
<div class="art-footer-text">
<?php
global $theme_default_options;
echo do_shortcode(theme_get_option('theme_override_default_footer_content') ? theme_get_option('theme_footer_content') : theme_get_array_value($theme_default_options, 'theme_footer_content'));
} else { 
?>
<div class="art-footer-text">

<div class="art-content-layout layout-item-0">
    <div class="art-content-layout-row">
    <div class="art-layout-cell layout-item-1" style="width: 33%"><?php if (false === theme_print_sidebar('footer-1-widget-area')) { ?>
        <p><a href="http://www.unn.ru/" style="font-family: Verdana;"><span style="color: #FFFFFF;">Хостинг для сайта предоставлен</span></a></p><p><span style="font-family: Verdana; color: #FFFFFF;"><a href="http://www.unn.ru/" style="font-family: Verdana;"><span style="color: #FFFFFF;">&nbsp;ННГУ им. Н.И. Лобачевского</span></a></span><span style="color: #FFFFFF;"></span></p><p><br></p><p class="MsoNormal"><span style="color: rgb(255, 255, 255); font-family: Verdana;">© МАОУ "Лицей №28 им. акад. Б.А.Королёва"</span></p><p class="MsoNormal"  style="color: rgb(255, 255, 255); font-family: Verdana;" >2020<span style="color: rgb(255, 255, 255); font-family: Verdana;"></span></p><p><br></p><p><span style="color: #FFFFFF;"></span></p>
    <?php } ?></div>
<div class="art-layout-cell layout-item-2" style="width: 34%"><?php if (false === theme_print_sidebar('footer-2-widget-area')) { ?>
        <p><img width="150" height="" alt="" class="art-lightbox" src="<?php echo get_template_directory_uri() ?>/images/%d0%b2%20%d1%88%d0%ba%d0%be%d0%bb%d1%83-large.png"><br></p>
    <?php } ?></div>
    <div class="art-layout-cell layout-item-1" style="width: 33%"><?php if (false === theme_print_sidebar('footer-3-widget-area')) { ?>
        <p>
        </p><p><br></p><p><br></p><p><img width="300" height="16" alt="" class="art-lightbox" src="<?php echo get_template_directory_uri() ?>/images/coollogo_com-196812535.png"><br></p>
    <?php } ?></div>

    </div>
</div>


<?php } ?>

</div>



