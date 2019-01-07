import React from 'react';

const SchemaGenerator = (props) => {
    console.log(props);
    
    return (
        <div>
            <script type="application/ld+json">
                {JSON.stringify(props.jsonLDData)}
            </script>
        </div>
    );
};

export default SchemaGenerator;