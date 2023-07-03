import React from "react";

import classes from "./PageHeader.module.scss";

type Props = {
  title: string;
};

const PageHeader: React.FC<Props> = React.memo(({ title }) => {
  return (
    <div className={classes.header}>
      <h1 className={classes.header_title}>{title}</h1>
    </div>
  );
});

export default PageHeader;
