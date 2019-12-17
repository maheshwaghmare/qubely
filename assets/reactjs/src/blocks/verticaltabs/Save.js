const { Component } = wp.element
const { InnerBlocks } = wp.blockEditor
const { HelperFunction: { animationAttr, IsInteraction } } = wp.qubelyComponents

class Save extends Component {
    renderTabTitles = () => {
        const { attributes: { tabTitles, iconPosition } } = this.props

        return tabTitles.map((title, index) =>
            <span tabIndex="0" className={`qubely-tab-item ${(index == 0) ? 'qubely-active' : ''}`}>
                <span class={`qubely-tab-title ${title.iconName ? 'qubely-has-icon-' + iconPosition : ''}`} role="button">
                    {title.iconName && (iconPosition == 'top' || iconPosition == 'left') && (<i className={`qubely-tab-icon ${title.iconName}`} />)}
                    {title.title}
                    {title.iconName && (iconPosition == 'right') && (<i className={`qubely-tab-icon ${title.iconName}`} />)}
                </span>
            </span>
        )
    }
    render() {
        const { uniqueId, tabs, tabStyle, navAlignment, animation, interaction } = this.props.attributes
        const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';
        let iterator = [], index = 0
        while (index < tabs) {
            iterator.push(index)
            index++
        }
        return (
            <div className={`qubely-block-${uniqueId}`} {...animationAttr(animation)}>
                <div className={`qubely-block-tab ${interactionClass} qubely-tab-style-${tabStyle}`}>
                    <div className={`qubely-tab-nav qubely-alignment-${navAlignment}`}>
                        {this.renderTabTitles(iterator)}
                    </div>
                    <div className={`qubely-tab-body`}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        )
    }
}
export default Save