install:
	npm install

proto:
	docker build -t spacy-proto-c -f proto.Dockerfile .
	docker run --rm -v $(shell pwd)/build:/build -v /Users/alex/go/src/github.com/alexmorten/spacy-server/protocol.proto:/input/protocol.proto spacy-proto-c

dev:
	npx webpack
