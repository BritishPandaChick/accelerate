<?php if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class NF_Fields_PasswordConfirm
 */
class NF_Fields_PasswordConfirm extends NF_Fields_Password
{
    protected $_name = 'passwordconfirm';

    protected $_type = 'passwordconfirm';

    protected $_nicename = 'Password Confirm';

    protected $_section = '';

    protected $_error_message = '';

    protected $_settings = array( 'confirm_field' );

    public function __construct()
    {
        parent::__construct();

        $this->_nicename = esc_html__( 'Password Confirm', 'ninja-forms' );

        $this->_settings[ 'confirm_field' ][ 'value' ] = esc_attr__( 'password', 'ninja-forms' );
        $this->_settings[ 'confirm_field' ][ 'field_types' ] = array( 'password' );
        $this->_settings[ 'confirm_field' ][ 'field_value_format' ] = 'key';

        add_filter( 'nf_sub_hidden_field_types', array( $this, 'hide_field_type' ) );
        add_filter( 'ninja_forms_csv_ignore_fields', array( $this, 'hide_field_type' ) );
    }

    function hide_field_type( $field_types )
    {
        $field_types[] = $this->_name;

        return $field_types;
    }

    public function validate( $field, $data )
    {
        $errors = parent::validate( $field, $data );

        $password_fields = $this->get_password_fields( $data );

        if( ! is_array( $password_fields ) || empty( $password_fields ) ) return $errors;

        foreach( $password_fields as $password_field ){

            if( $this->is_matching_values( $field, $password_field ) ) continue;

            $errors[] = $this->get_error_message();
        }

        return $errors;
    }

    private function get_password_fields( $data )
    {
        $password_fields = array();

        foreach( $data[ 'fields' ] as $field ){

            $complete_field = Ninja_Forms()->form( $data[ 'id' ] )->get_field( $field['id'] )->get_settings();
            
            if( 'password' != $complete_field[ 'type' ] ) continue;

            $password_fields[] = $field;
        }

        return $password_fields;
    }

    private function is_matching_values( $a, $b )
    {
        return $a[ 'value' ] === $b[ 'value' ];
    }

    private function get_error_message()
    {
        if( $this->_error_message ) return $this->_error_message;

        $error_message = esc_html__( 'Passwords do not match', 'ninja-forms' );

        $error_message = apply_filters( 'ninja_forms_password_confirm_mismatch', $error_message );

        return $this->_error_message = $error_message;
    }
}
