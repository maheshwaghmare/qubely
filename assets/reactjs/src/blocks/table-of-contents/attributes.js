const { __ } = wp.i18n;
const {
    gloalSettings: {
        globalAttributes
    }
} = wp.qubelyComponents

const attributes = {
    uniqueId: {
        type: 'string',
        default: ''
    },
    showTitle: {
        type: 'boolean',
        default: true
    },
    allowedAnchors: {
        type: 'object',
        default: {
            h1: true,
            h2: true,
            h3: true,
            h4: true,
            h5: true,
            h6: true,
        }
    },
    scrollToTop: {
        type: 'boolean',
        default: true
    },
    title: {
        type: 'string',
        default: 'Table of Contents'
    },
    align: {
        type: 'string',
        default: 'left',
    },
    tableType: {
        type: 'string',
        default: 'unordered'
    },
    minimizeBox: {type: 'boolean', default: false},

    headerBg: {
        type: 'object',
        default: {
            openColor: 1,
            type: 'color',
            color: '#F7FCFF',
        },
        style: [{ selector: '{{QUBELY}} .qubely-table-of-contents-header' }]
    },

    headingSize: {
        type: 'number',
        default: {
            md: 20,
            unit: 'px'
        },
        style: [{
            selector: '{{QUBELY}} .qubely-table-of-contents-header{font-size: {{headingSize}}}'
        }]
    },
    headerPaddingX: {
        type: 'number',
        default: {
            md: 20,
            unit: 'px'
        },
        style: [{
            selector: '{{QUBELY}} .qubely-table-of-contents-header{padding-left: {{headerPaddingX}}; padding-right: {{headerPaddingX}}}'
        }]
    },
    headerPaddingY: {
        type: 'number',
        default: {
            md: 10,
            unit: 'px'
        },
        style: [{
            selector: '{{QUBELY}} .qubely-table-of-contents-header{padding-top: {{headerPaddingY}}; padding-bottom: {{headerPaddingY}}}'
        }]
    },
    bodyBg: {
        type: 'object',
        default: {
            openColor: 1,
            type: 'color',
            color: '#ffffff',
        },
        style: [{ selector: '{{QUBELY}} .qubely-table-of-contents' }]
    },
    bodyPaddingX: {
        type: 'number',
        default: {
            md: 20,
            unit: 'px'
        },
        style: [{
            selector: '{{QUBELY}} .qubely-table-of-contents-body{padding-left: {{bodyPaddingX}}; padding-right: {{bodyPaddingX}}}'
        }]
    },
    bodyPaddingY: {
        type: 'number',
        default: {
            md: 10,
            unit: 'px'
        },
        style: [{
            selector: '{{QUBELY}} .qubely-table-of-contents-body{padding-top: {{bodyPaddingY}}; padding-bottom: {{bodyPaddingY}}}'
        }]
    },
    bodyBorder: {
        type: 'object',
        default: {
            borderType: 'global',
            widthType: 'global',
            openBorder: 1,
            type: 'solid',
            unit: 'px',
            global: {
                md: 1
            }
        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-table-of-contents'
            }
        ]
    },
    bodyShadow: {
        type: 'object',
        default: {
            openShadow: 1,
            inset: '',
            horizontal: 0,
            vertical: 32,
            blur: 54,
            spread: -20,
            color: 'rgba(0, 0, 0, .2)'
        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-table-of-contents'
            }
        ]
    },
    bodyBorderRadius: {
        type: 'object',
        default: {
            radiusType: 'global'
        },
        style: [
            {
                selector: '{{QUBELY}} .qubely-table-of-contents'
            }
        ]
    },
    headerLinks: {
        type: 'string',
        default: ''
    },
    // Global
    ...globalAttributes
}
export default attributes;