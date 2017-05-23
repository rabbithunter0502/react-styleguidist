import Editor from 'rsg-components/Editor';
import LinkButton from './LinkButton';
import IsolateButton from './IsolateButton';
import CodeTabButton from './CodeTabButton';

export const EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';

export default {
	sectionToolbar: [LinkButton, IsolateButton],
	componentToolbar: [LinkButton, IsolateButton],
	exampleToolbar: [IsolateButton],
	exampleTabButtons: [
		{
			id: EXAMPLE_TAB_CODE_EDITOR,
			render: CodeTabButton,
		},
	],
	exampleTabs: [
		{
			id: EXAMPLE_TAB_CODE_EDITOR,
			render: Editor,
		},
	],
};
