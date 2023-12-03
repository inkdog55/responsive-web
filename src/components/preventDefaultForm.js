export default function PreventDefaultForm() {
  return (
    <form
      className="header__form"
      onSubmit={ClickEvent}
    />
  );
}
