<?php

function show_component_name() {
  $fileName = 'component_name.php';
  ob_start();
  $filePath = get_theme_root() . '/' .get_template() . '/_components/' . $fileName;
  include($filePath);
  $result = ob_get_contents();
  ob_end_clean();
  return $result;
}
add_shortcode('show_component_name', 'show_component_name');
