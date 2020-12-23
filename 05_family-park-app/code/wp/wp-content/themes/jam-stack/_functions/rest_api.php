<?php

add_action('rest_api_init', 'add_rest_api_name');

function add_rest_api_name() {
  register_rest_route('name/v0', '/(?P<num>\d+)', array(
    'methods' => 'GET',
    'callback' => 'get_name',
    'args' => array(
      'num'
    ),
  ));
}

function get_name($query) {
  $return_page_num;
  if ($query['num'] == 0) {
    $return_page_num = -1;
  } else {
    $return_page_num = $query['num'];
  }
  $args = array(
    'post_type' => 'name',
    'posts_per_page' => $return_page_num
  );
  $result = array_map('format_name', get_posts($args));
  return $result;
}

function format_name($post) {
  $name_item = array(
    'date' => $post->post_date,
    'year' => get_the_date('Y', $post->ID),
    'month' => get_the_date('n', $post->ID),
    'day' => get_the_date('j', $post->ID),
    'type' => get_post_meta($post->ID, 'カスタムフィールド名', true)
  );
  return $name_item;
}
