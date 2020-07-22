<?php



/**
 * Load a block pattern by name.
 *
 * @param string $name Block Pattern File name.
 *
 * @return array Block Pattern Array.
 */
function load_qubely_block_pattern($name)
{
	return require(QUBELY_DIR_PATH . 'core/block-patterns/patterns/' . $name . '.php');
}

function qubely_register_block_patterns()
{

	register_block_pattern('qubely/four-buttons', load_qubely_block_pattern('two-buttons'));
	register_block_pattern_category('buttons2', array('label' => __('Qubely Buttons', 'Block pattern category', 'Qubely')));
}
add_action('init', 'qubely_register_block_patterns', 0);
