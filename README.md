# Kubernetes Web Application

A simple web application deployed on Kubernetes.

## Project Structure

- `deployment.yaml`: Kubernetes Deployment configuration
- `service.yaml`: Kubernetes Service configuration

## Prerequisites

- Docker
- Kubernetes (Minikube for local development)
- kubectl

## Setup Instructions

### 1. Start Minikube

```bash
minikube start
```

### 2. Deploy the Application

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 3. Access the Application

```bash
minikube service web-app-service
```

Or use port forwarding:

```bash
kubectl port-forward svc/web-app-service 8080:80
```

Then access the application at http://localhost:8080

## Customizing the Application

To use your own Docker image:

1. Update the `image` field in `deployment.yaml` to point to your Docker image
2. Apply the changes:
   ```bash
   kubectl apply -f deployment.yaml
   ```

## Troubleshooting

### Image Pull Issues

If you encounter "ImagePullBackOff" errors:

1. Ensure your Docker image is publicly accessible or
2. Use a local image with Minikube:
   ```bash
   eval $(minikube docker-env)
   docker build -t your-image:tag .
   ```
   Then update deployment.yaml to include `imagePullPolicy: Never`

### Connection Issues

If you can't access the service:
1. Check pod status: `kubectl get pods`
2. Check service status: `kubectl get svc`
3. Try port forwarding: `kubectl port-forward svc/web-app-service 8080:80`

## License

[Your License]