jupyter_container_name := "jupyter-tensorflow-gpu"
de := docker exec -it $(jupyter_container_name)

.PHONY:run/jupyter
run/jupyter:
	@docker-compose -f docker-compose-tf.yml up --build

.PHONY: docker/sh
docker/sh:
	@$(de) /bin/sh

.PHONY: model/json
model/json:
	@$(de) sh -c "tensorflowjs_converter \--input_format=keras \ZoidbergModel.h5 \ModelJS"