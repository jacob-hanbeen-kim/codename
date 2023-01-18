FROM golang:1.19-alpine
# Set the Current Working Directory inside the container
WORKDIR /app/Backend

# We want to populate the module cache based on the go.{mod,sum} files.
COPY go.mod .
COPY go.sum .

RUN go mod download
RUN apk add ca-certificates
RUN apk add curl
RUN go get -u github.com/gin-gonic/gin

COPY . .

# Build the Go app
RUN go build -o . .

# This container exposes port 8000 to the outside world
EXPOSE 8080

# Run the executable
CMD ["./Backend"]

