<?php

/*
 * Plugin Name: Board Hoard Events Post Type
 */

add_action( 'init', 'board_hoard_events_pt' );

function board_hoard_events_pt() {

    $labels = array(
    
        'name'                     => __( 'Events', 'BOARDHOARD' ),
        'singular_name'            => __( 'Event', 'BOARDHOARD' ),
        'add_new'                  => __( 'Add New', 'BOARDHOARD' ),
        'add_new_item'             => __( 'Add New Event', 'BOARDHOARD' ),
        'edit_item'                => __( 'Edit Event', 'BOARDHOARD' ),
        'new_item'                 => __( 'New Event', 'BOARDHOARD' ),
        'view_item'                => __( 'View Event', 'BOARDHOARD' ),
        'view_items'               => __( 'View Events', 'BOARDHOARD' ),
        'search_items'             => __( 'Search Events', 'BOARDHOARD' ),
        'not_found'                => __( 'No Events found.', 'BOARDHOARD' ),
        'not_found_in_trash'       => __( 'No Events found in Trash.', 'BOARDHOARD' ),
        'parent_item_colon'        => __( 'Parent Events:', 'BOARDHOARD' ),
        'all_items'                => __( 'All Events', 'BOARDHOARD' ),
        'archives'                 => __( 'Event Archives', 'BOARDHOARD' ),
        'attributes'               => __( 'Event Attributes', 'BOARDHOARD' ),
        'insert_into_item'         => __( 'Insert into Event', 'BOARDHOARD' ),
        'uploaded_to_this_item'    => __( 'Uploaded to this Event', 'BOARDHOARD' ),
        'featured_image'           => __( 'Featured Image', 'BOARDHOARD' ),
        'set_featured_image'       => __( 'Set featured image', 'BOARDHOARD' ),
        'remove_featured_image'    => __( 'Remove featured image', 'BOARDHOARD' ),
        'use_featured_image'       => __( 'Use as featured image', 'BOARDHOARD' ),
        'menu_name'                => __( 'Events', 'BOARDHOARD' ),
        'filter_items_list'        => __( 'Filter Event list', 'BOARDHOARD' ),
        'filter_by_date'           => __( 'Filter by date', 'BOARDHOARD' ),
        'items_list_navigation'    => __( 'Events list navigation', 'BOARDHOARD' ),
        'items_list'               => __( 'Events list', 'BOARDHOARD' ),
        'item_published'           => __( 'Event published.', 'BOARDHOARD' ),
        'item_published_privately' => __( 'Event published privately.', 'BOARDHOARD' ),
        'item_reverted_to_draft'   => __( 'Event reverted to draft.', 'BOARDHOARD' ),
        'item_scheduled'           => __( 'Event scheduled.', 'BOARDHOARD' ),
        'item_updated'             => __( 'Event updated.', 'BOARDHOARD' ),
        'item_link'                => __( 'Event Link', 'BOARDHOARD' ),
        'item_link_description'    => __( 'A link to an event.', 'BOARDHOARD' ),

    );
    
    $args = array(
        'labels'                => $labels,
        'description'           => __( 'organize and manage company events', 'BOARDHOARD' ),
        'public'                => true,
        'hierarchical'          => false,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_nav_menus'     => false,
        'show_in_rest'          => true,
        'menu_icon'             => 'dashicons-calendar',
        'capability_type'       => 'post',
        'supports'              => array( 'title', 'editor', 'revisions', 'thumbnail' ),
        'has_archive'           => true,
        'rewrite'               => array( 'slug' => 'event' ),
    );

    register_post_type( 'board_hoard_event_pt', $args );
}