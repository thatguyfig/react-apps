import { CopyBlock, dracula } from "react-code-blocks"

function CodeBlock({ code, language, showLineNumbers, startingLineNumber }) {
    return (
        <div className="max-w-2xl mx-auto">
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                theme={dracula}
                wrapLines
            />

        </div>
    )
}

export default CodeBlock