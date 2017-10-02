'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.screen == "") {
    wrapper.append(Personal (_ =>render(root)));
  }else if (state.screen == "principal") {
    wrapper.append(Principal(_ =>render(root)));
  }
  else if (state.screen == "personal") {
    wrapper.append(Personal(_ =>render(root)));
  }
  else if (state.screen == "variedades") {
    wrapper.append(Variedades(_ =>render(root)));
  }
  else if (state.screen == "data") {
    wrapper.append(Data(_ =>render(root)));
  }
  else if (state.screen == "reporteCultivo") {
    wrapper.append(ReporteCultivo(_ =>render(root)));
  }
  else if (state.screen == "reporteProvincia") {
    wrapper.append(ReporteProvincia(_ =>render(root)));
  }
  root.append(wrapper);
}

const state = {
  screen: ""
}

$(_ => {
  const root = $("#root");
  render(root);
})
